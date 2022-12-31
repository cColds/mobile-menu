setTimeout(() => {
	document.body.classList.remove("preload");
}, 500);

const mobileMenu = document.querySelector(".mobile-menu");

function toggleMobileMenu() {
	const isMobileMenuOpen = mobileMenu.dataset.mobileMenuOpen === "true";
	mobileMenu.dataset.mobileMenuOpen = !isMobileMenuOpen;
}

function unselectItem() {
	document.querySelector(".selected").classList.remove("selected");
}

function selectItem(e) {
	e.target.closest("li").classList.add("selected");
}

const openMobileMenu = document.querySelector(".open-mobile-menu");

openMobileMenu.addEventListener("click", (e) => {
	const elementClassName = e.target.classList;

	if (
		(elementClassName.contains("mobile-menu") ||
			elementClassName.contains("open-mobile-menu")) &&
		openMobileMenu.classList.contains("active")
	) {
		return;
	}
	openMobileMenu.classList.toggle("active");
	toggleMobileMenu();

	if (e.target.closest("li")) {
		unselectItem();
		selectItem(e);
	}
});
