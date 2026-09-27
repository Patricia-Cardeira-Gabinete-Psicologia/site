import { useEffect } from "react";

// The widget translates its menu, but leaves some tooltips and ARIA labels in English.
const labels: Record<string, string> = {
  "Open Accessibility Menu": "Abrir menu de acessibilidade",
  "Select Language": "Selecionar idioma",
};

export default function AccessibilityLabels() {
  useEffect(() => {
    let widget: Element | null = null;

    const translateLabels = () => {
      const language = widget?.querySelector<HTMLSelectElement>("#asw-language");
      if (language && language.value !== "pt") return;

      widget?.querySelectorAll("[title], [aria-label]").forEach((element) => {
        const title = element.getAttribute("title");
        const label = element.getAttribute("aria-label");
        const translatedTitle = title ? labels[title] ?? title : null;
        const profileTitle = element.querySelector(".asw-profile-title")?.textContent;
        const translatedLabel = label
          ? labels[label] ?? profileTitle ?? translatedTitle ?? label
          : null;

        if (translatedTitle && translatedTitle !== title) {
          element.setAttribute("title", translatedTitle);
        }
        if (translatedLabel && translatedLabel !== label) {
          element.setAttribute("aria-label", translatedLabel);
        }
      });
    };

    const observer = new MutationObserver(() => {
      if (widget) translateLabels();
      else attachToWidget();
    });

    const attachToWidget = () => {
      widget = document.querySelector(".asw-container");
      if (!widget) return;

      observer.disconnect();
      observer.observe(widget, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["title", "aria-label"],
      });
      translateLabels();
    };

    observer.observe(document.body, { childList: true });
    attachToWidget();
    return () => observer.disconnect();
  }, []);

  return null;
}
