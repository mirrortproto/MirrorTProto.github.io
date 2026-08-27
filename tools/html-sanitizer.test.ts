import assert from "node:assert/strict";
import test from "node:test";
import { sanitizeUpstreamHtml } from "./html-sanitizer.js";

test("removes executable and interactive upstream markup", () => {
  const output = sanitizeUpstreamHtml(`
    <script>alert(1)</script><object data="https://evil.test/x"></object>
    <form action="https://evil.test"><input name="secret"><button>Send</button></form>
    <img src="https://telegram.org/image.png" onerror="alert(1)">
    <a href="javascript:alert(1)" onclick="alert(2)">unsafe</a>
    <a href="data:text/html,<script>alert(3)</script>">data</a>
  `);
  assert.doesNotMatch(output, /<(?:script|object|form|input|button)\b/i);
  assert.doesNotMatch(output, /\son\w+\s*=/i);
  assert.doesNotMatch(output, /(?:javascript:|data:text\/html)/i);
  assert.match(output, /<img src="https:\/\/telegram\.org\/image\.png" \/>/);
  assert.match(output, />unsafe<\/a>/);
});

test("preserves safe documentation tables and Telegram media", () => {
  const output = sanitizeUpstreamHtml(`
    <table class="table"><thead><tr><th scope="col">Name</th></tr></thead>
    <tbody><tr><td rowspan="2">Value</td></tr></tbody></table>
    <div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto">
      <video controls autoplay muted poster="https://telegram.org/poster.jpg" style="width: 100%; background-image: url(javascript:alert(1))">
        <source src="https://telegram.org/video.mp4" type="video/mp4">
      </video>
    </div>
  `);
  assert.match(output, /<table class="table">/);
  assert.match(output, /<th scope="col">Name<\/th>/);
  assert.match(output, /<td rowspan="2">Value<\/td>/);
  assert.match(
    output,
    /<video controls autoplay muted poster="https:\/\/telegram\.org\/poster\.jpg" style="width:100%">/,
  );
  assert.match(
    output,
    /<source src="https:\/\/telegram\.org\/video\.mp4" type="video\/mp4"><\/source>/,
  );
  assert.doesNotMatch(output, /background-image|javascript:/i);
});

test("repairs whitespace-corrupted upstream media URLs", () => {
  const output = sanitizeUpstreamHtml(`
    <img src="https://telegram.org/file/path

/hash" alt="poster">
    <video poster="/file/poster
/hash"><source src="/resources/video/demo.mp4"></video>
  `);
  assert.match(output, /src="https:\/\/telegram\.org\/file\/path\/hash"/);
  assert.match(output, /poster="\/file\/poster\/hash"/);
  assert.match(
    output,
    /<source src="\/resources\/video\/demo\.mp4"><\/source>/,
  );
});

test("hardens links opened in a new tab", () => {
  const output = sanitizeUpstreamHtml(
    '<a href="https://telegram.org/file" target="_blank" rel="nofollow">file</a>',
  );
  assert.equal(
    output,
    '<a href="https://telegram.org/file" target="_blank" rel="nofollow noopener noreferrer">file</a>',
  );
});
