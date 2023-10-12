export default function Footer() {
  return (
    <>
      <div class="container">
        <footer class="footer py-3 my-4 footer-dark ">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/home" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a href="/contact" class="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}
