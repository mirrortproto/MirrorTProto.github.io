window.addEventListener("DOMContentLoaded", async () => {
  const query = new URLSearchParams(location.search).get("q");
  if (!query) return;

  await customElements.whenDefined("pagefind-searchbox");
  requestAnimationFrame(() => {
    const input = document.querySelector<HTMLInputElement>(
      "pagefind-searchbox input",
    );
    if (!input) return;
    input.value = query;
    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        inputType: "insertText",
        data: query,
      }),
    );
  });
});
