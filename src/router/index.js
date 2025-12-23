import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue"),
            children: [
                {
                    path: "/book",
                    name: "book",
                    component: () => import("@/views/book/Index.vue"),
                },
                {
                    path: "/book/insert",
                    name: "bookInsert",
                    component: () => import("@/views/book/Insert.vue"),
                },
                {
                    path: "/book/update/:id",
                    name: "bookUpdate",
                    component: () => import("@/views/book/Update.vue"),
                    props: true,
                }
            ]
        }
    ]
});

export default router;