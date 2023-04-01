import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig> {
    async scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
      
        const findEl = async (hash: any, x = 0) => {
            return (
                document.querySelector(hash) ||
                new Promise((resolve) => {
                if (x > 0) {
                    return resolve(document.querySelector("body"));
                }
                setTimeout(() => {
                    resolve(findEl(hash, 1));
                }, 300);
                })
            );
        };
    
        if (to.hash) {
            const el = await findEl(to.hash);
        
            if ("scrollBehavior" in document.documentElement.style) {
                return window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
            } else {
                return window.scrollTo(0, el.offsetTop);
            }
        }
        return { left: 0, top: 0, behaviour: "smooth" };
    }
}