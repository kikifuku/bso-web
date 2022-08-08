class myNavBar extends HTMLElement {
  constructor() {
    super();
        this.innerHTML = `
        
            <div class="container">
              <a class="navbar-brand" href="../index.html">
                  <img src="../images/Asset 4.svg" alt="" width="200" height="68">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style="background-color: #95e2ec;">
                  <li class="nav-item dropdown" style="background-color: #95e2ec;">
                    <a class="nav-link dropdown-toggle" href="#" role="button" style="color: white; font-family:'Work Sans', sans-serif;font-weight: 700; background-color: #95e2ec" data-bs-toggle="dropdown" aria-expanded="false">
                        Hakkımızda
                      </a>
                      <ul class="dropdown-menu" style="background-color: #EDFDFF;">
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/bizkimiz.html">Biz Kimiz?</a></li>
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/kuruluşumuz.html">Kuruluşumuz</a></li>
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/amaçlarımız.html">Amaçlarımız</a></li>
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/nedenlerimiz.html">Nedenlerimiz</a></li>
                      </ul>
                  </li>
                  <li class="nav-item dropdown" style="background-color: #95e2ec;">
                    <a class="nav-link dropdown-toggle" href="#" role="button" style="color: white; font-family:'Work Sans', sans-serif;font-weight: 700; background-color: #95e2ec" data-bs-toggle="dropdown" aria-expanded="false">
                      Psikolojik Şiddet
                    </a>
                    <ul class="dropdown-menu" style="background-color: #EDFDFF;">
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/psikolojikşiddetnedir.html">Psikolojik Şiddet Nedir?</a></li>
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/yasalar.html">Yasalar</a></li>
                        <li><a class="dropdown-item" style="font-family:'Work Sans', sans-serif" href="../pages/önlemler.html">Alınabilecek Önlemler</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" style="color: white; font-family:'Work Sans', sans-serif;font-weight: 700;" aria-expanded="false">
                      BSO Akademi
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: white; font-family:'Work Sans', sans-serif;font-weight: 700;">S.S.S</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: white; font-family:'Work Sans', sans-serif;font-weight: 700;">Bize Ulaşın</a>
                  </li>
                </ul>
              </div>
            </div>
          `
    }
}

customElements.define("my-navbar", myNavBar)