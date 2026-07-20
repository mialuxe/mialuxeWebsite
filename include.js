async function loadComponent(id, file) {
    const response = await fetch(file + "?v=" + Date.now(), {
        cache: "no-store"
    });

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function init() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    initializeMobileMenu();
    highlightActiveLink();
    initializeNavScroll();
}

init();

function initializeMobileMenu() {
    const menuBtn = document.getElementById("hamburger-menu-btn");
    const drawer = document.getElementById("mobile-nav-drawer");
    const drawerContent = document.getElementById("mobile-drawer-content");
    const closeBtn = document.getElementById("close-drawer-btn");

    if (!menuBtn || !drawer || !drawerContent || !closeBtn) {
        console.log("Menu elements not found");
        return;
    }

    const openDrawer = () => {
        drawer.classList.remove("opacity-0", "pointer-events-none");
        drawerContent.classList.remove("translate-x-full");
        drawer.removeAttribute("inert");
        drawer.setAttribute("aria-hidden", "false");
        menuBtn.setAttribute("aria-expanded", "true");
    };

    const closeDrawer = () => {
        drawer.classList.add("opacity-0", "pointer-events-none");
        drawerContent.classList.add("translate-x-full");
        if (drawer.contains(document.activeElement)) {
            menuBtn.focus();
        }
        drawer.setAttribute("inert", "");
        drawer.setAttribute("aria-hidden", "true");
        menuBtn.setAttribute("aria-expanded", "false");
    };

    menuBtn.addEventListener("click", () => {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    closeBtn.addEventListener("click", closeDrawer);

    // Close on clicking backdrop
    drawer.addEventListener("click", (e) => {
        if (e.target === drawer) {
            closeDrawer();
        }
    });

    // Close drawer when any mobile menu link is clicked
    const links = drawer.querySelectorAll(".mobile-menu-link");
    links.forEach(link => {
        link.addEventListener("click", closeDrawer);
    });
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#main-nav nav a, #mobile-nav-drawer nav a");
    
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;

        // Remove active styles from all links
        link.classList.remove("text-primary", "font-bold", "font-semibold", "border-b-2", "border-primary", "pb-1");
        link.classList.add("text-on-surface-variant", "font-medium");

        // Determine if current link is active
        const isHome = currentPath === "/" || currentPath.endsWith("index.html") || currentPath === "";
        const isLinkHome = href === "index.html" || href === "#" || href === "";

        if ((isHome && isLinkHome) || (href && currentPath.endsWith(href) && href !== "index.html" && href !== "#")) {
            link.classList.remove("text-on-surface-variant", "font-medium");
            link.classList.add("text-primary", "font-bold");
            // Only add border active styles to desktop nav links (parent is not mobile-nav-drawer)
            if (!link.closest("#mobile-nav-drawer")) {
                link.classList.add("border-b-2", "border-primary", "pb-1");
            }
        }
    });
}

function initializeNavScroll() {
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("py-2", "bg-surface/95", "backdrop-blur-md", "shadow-sm", "border-b", "border-cream-200/30");
            nav.classList.remove("py-4");
        } else {
            nav.classList.add("py-4", "bg-surface/80");
            nav.classList.remove("py-2", "bg-surface/95", "backdrop-blur-md", "shadow-sm", "border-b", "border-cream-200/30");
        }
    });
}