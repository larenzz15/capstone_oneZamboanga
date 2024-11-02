class SpecialLogout extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="logout">
                <div class="link">
                    <a href="../../login.html">
                        <p>Click to <b>Logout</b></p>
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </a>
                </div>
                
            </div>
            <a class="logout logout-icon" href="../../login.html">
                <i class="fa-solid fa-right-from-bracket"></i>
            </a>
        `
    }
}

customElements.define('special-logout', SpecialLogout)