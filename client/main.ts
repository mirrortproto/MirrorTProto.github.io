type Theme = "auto" | "light" | "dark";
const THEMES: readonly Theme[] = ["auto", "light", "dark"];

function currentTheme(): Theme {
  try {
    const value = localStorage.getItem("theme");
    return value === "light" || value === "dark" ? value : "auto";
  } catch {
    return "auto";
  }
}

function applyTheme(theme: Theme): void {
  if (theme === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;

  const toggle = document.querySelector<HTMLButtonElement>(".theme-toggle");
  if (toggle) {
    toggle.dataset.mode = theme;
    toggle.title = `Color theme: ${theme}`;
    toggle.setAttribute(
      "aria-label",
      `Color theme: ${theme}. Click to switch.`,
    );
  }
  for (const button of document.querySelectorAll<HTMLButtonElement>(
    ".theme-seg button",
  )) {
    button.setAttribute("aria-pressed", String(button.dataset.mode === theme));
  }
  const dark =
    theme === "dark" ||
    (theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  for (const meta of document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  )) {
    if (meta.media.includes("dark"))
      meta.content = dark ? "#0d1117" : "#ffffff";
  }
}

function setTheme(theme: Theme): void {
  try {
    if (theme === "auto") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // Applying the theme still works when persistence is unavailable.
  }
  applyTheme(theme);
}

for (const button of document.querySelectorAll<HTMLButtonElement>(
  ".theme-seg button",
)) {
  button.addEventListener("click", () => {
    const theme = button.dataset.mode;
    if (theme === "auto" || theme === "light" || theme === "dark")
      setTheme(theme);
  });
}
document
  .querySelector<HTMLButtonElement>(".theme-toggle")
  ?.addEventListener("click", () => {
    const current = currentTheme();
    setTheme(THEMES[(THEMES.indexOf(current) + 1) % THEMES.length] ?? "auto");
  });
applyTheme(currentTheme());

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName ?? "";
  if (event.key !== "/" || /^(input|textarea|select)$/i.test(tag)) return;
  const search = document.querySelector<HTMLInputElement>(
    "pagefind-searchbox input, .site-search input",
  );
  if (search) {
    event.preventDefault();
    search.focus();
  }
});

for (const box of document.querySelectorAll<HTMLElement>(".img-box")) {
  const media = box.querySelector<HTMLImageElement | HTMLVideoElement>(
    "img, video",
  );
  if (media instanceof HTMLImageElement && media.complete) {
    box.classList.add(media.naturalWidth > 0 ? "img-ok" : "img-broken");
  } else if (media instanceof HTMLVideoElement && media.readyState >= 2) {
    box.classList.add("img-ok");
  }
}
