window.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    customElements.whenDefined("pagefind-filter-dropdown"),
    customElements.whenDefined("pagefind-searchbox"),
  ]);

  const dropdown = document.querySelector("pagefind-filter-dropdown");
  const labelDropdown = (): boolean => {
    const trigger = dropdown?.querySelector<HTMLButtonElement>(
      ".pf-dropdown-trigger",
    );
    if (!trigger) return false;
    if (!trigger.hasAttribute("aria-label"))
      trigger.setAttribute(
        "aria-label",
        dropdown?.getAttribute("label") || "Search filters",
      );
    return true;
  };
  labelDropdown();
  if (dropdown) {
    const observer = new MutationObserver(labelDropdown);
    observer.observe(dropdown, { childList: true, subtree: true });
  }

  requestAnimationFrame(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (!query) return;
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
