import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function hasFadeAnim(item) {
  if (item) {
    let fade_direction = "bottom";
    let onscroll_value = 1;
    let duration_value = 1.5;
    let fade_offset = 50;
    let delay_value = 0.5;
    let ease_value = "power2.out";

    const gsapFunction = (item) => {
      if (history.includes(item)) {
        return;
      } else {
        history.push(item);
        let tHero = gsap.context(() => {
          try {
            gsap.from(item, {
              y:
                fade_direction == "top" || fade_direction == "bottom"
                  ? fade_direction == "top"
                    ? -fade_offset
                    : fade_offset
                  : 0,
              x:
                fade_direction == "left" || fade_direction == "right"
                  ? fade_direction == "left"
                    ? -fade_offset
                    : fade_offset
                  : 0,
              opacity: 0,
              ease: ease_value,
              duration: duration_value,
              delay: delay_value,
              scrollTrigger:
                onscroll_value == 1
                  ? {
                      trigger: item,
                      start: "top 85%",
                    }
                  : "",
            });
          } catch (e) {
            console.log("Fade anim error: ", e);
          }
        });
        return () => tHero.revert();
      }
    };

    if (typeof window !== "undefined") {
      if (item.children) {
        for (let j = 0; j < item.children.length; j++) {
          if (item.children[j].className.includes("has_fade_anim")) {
            fade_direction = item.children[j].getAttribute("data-fade-from")
              ? item.children[j].getAttribute("data-fade-from")
              : fade_direction;

            onscroll_value = item.children[j].getAttribute("data-on-scroll")
              ? item.children[j].getAttribute("data-on-scroll")
              : onscroll_value;

            duration_value = item.children[j].getAttribute("data-duration")
              ? item.children[j].getAttribute("data-duration")
              : duration_value;

            fade_offset = item.children[j].getAttribute("data-fade-offset")
              ? item.children[j].getAttribute("data-fade-offset")
              : fade_offset;

            delay_value = item.children[j].getAttribute("data-delay")
              ? item.children[j].getAttribute("data-delay")
              : delay_value;

            ease_value = item.children[j].getAttribute("data-ease")
              ? item.children[j].getAttribute("data-ease")
              : ease_value;
            gsapFunction(item.children[j]);
          } else {
            fade_direction = item.getAttribute("data-fade-from")
              ? item.getAttribute("data-fade-from")
              : fade_direction;

            onscroll_value = item.getAttribute("data-on-scroll")
              ? item.getAttribute("data-on-scroll")
              : onscroll_value;

            duration_value = item.getAttribute("data-duration")
              ? item.getAttribute("data-duration")
              : duration_value;

            fade_offset = item.getAttribute("data-fade-offset")
              ? item.getAttribute("data-fade-offset")
              : fade_offset;

            delay_value = item.getAttribute("data-delay")
              ? item.getAttribute("data-delay")
              : delay_value;

            ease_value = item.getAttribute("data-ease")
              ? item.getAttribute("data-ease")
              : ease_value;
            gsapFunction(item);
          }
        }
      }
    }
  }
}