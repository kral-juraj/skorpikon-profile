(() => {
  async function includeFragment(target) {
    const url = target.getAttribute("data-include");
    if (!url) return;

    try {
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      target.innerHTML = await response.text();
      target.removeAttribute("data-include");
    } catch (error) {
      target.innerHTML = `<div class="job-card"><p class="job-summary">Content could not be loaded from <code>${url}</code>.</p></div>`;
      console.error("Failed to include HTML fragment:", url, error);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(includeFragment);
  });
})();
