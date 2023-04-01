import { Router } from 'h3'
import { FunctionalComponent, ref } from 'vue'
import Routes from '~/config/routes.js'

interface RouteItem {
   title: String, 
   id: String,
   href: String, 
   icon: FunctionalComponent
}

export default defineNuxtPlugin(nuxtApp => {

  const intersectEntries = ref<RouteItem[]>([])
  const activeRoute = ref<RouteItem|null>(null)
  return {
    provide: {
      routing: {
        init() {
          function handleIntersection(entries: any) {
            entries.map((entry: any) => {
              if (entry.isIntersecting) {
                intersectEntries.value.push(Routes.find((item: RouteItem) => item.id === entry.target.id))
              } else {
                intersectEntries.value = intersectEntries.value.filter((item: RouteItem) => item.id !== entry.target.id)
              }

              activeRoute.value = intersectEntries.value[0]
            });
          }

          const observer = new IntersectionObserver(handleIntersection, {
            threshold: [0.2, 0.4, 0.6, 0.8]
          });

          Routes.forEach((route: RouteItem) => {
            const el = document.querySelector('#' + route.id);
            if (el) observer.observe(el);
          });
        },
        isActive: (item: RouteItem) => {
          return item.id === activeRoute.value?.id
        },
        getActive: () => activeRoute,
        goTo: (item: RouteItem) => {
          try {
            const section = document?.querySelector('#' + item.id)
            console.log(section?.getBoundingClientRect())
            window.scrollTo({
              top: 100,
              behavior: "smooth",
            });
          } catch (e) {
            console.warn(e)
          }
        },
      },
    }
  }
  })