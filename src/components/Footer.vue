<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="grid-8 footer_historia">
          <h3>Nossa História</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ea,
            tempora itaque laboriosam impedit tenetur.
          </p>
        </div>

        <div class="grid-4 footer_contato">
          <h3>Contato</h3>
          <ul>
            <li>- +55 (31) 90000-0000</li>
            <li>- contato@readytw.com.br</li>
            <li>- Belo Horizonte - MG</li>
          </ul>
        </div>

        <div class="grid-4 footer_redes">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="http://www.facebook.com" target="_blank"
                ><img src="../assets/facebook.png" alt="Facebook"
              /></a>
            </li>
            <li>
              <a href="http://www.linkedin.com" target="_blank"
                ><img src="../assets/linkedin.png" alt="LinkedIn"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--div container-->
    <div class="copy">
      <div class="container">
        <p class="copy-text grid-16">READY TO WORK - 2021 ©</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.quebra {
  background-color: #fe1243;
  width: 100%;
  height: 225px;
  background-size: cover;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}

.quebra .quote-externo {
  max-width: 400px;
  padding-top: 60px;
}

.quebra cite {
  font-size: 40px;
  font-weight: bold;
}

.footer {
  display: grid;
  grid-template-columns: 4;
  margin: 0 auto;
  width: 100%;
  background: #171717;
  color: #fff;
  padding: 20px 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.footer h3 {
  font-size: 18px;
  line-height: 25px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.footer h3:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: #fe1243;
  margin: 6px 0 12px 0;
}

.footer_historia {
  padding-right: 40px;
}

.footer_contato li {
  line-height: 22px;
  font-size: 14px;
  list-style: none;
}

.footer_redes ul li {
  display: inline-block;
  margin: 10px;
}

.footer_redes img:hover {
  background: rgba(255, 255, 255, 0.3);
}

.copy {
  width: 100%;
  background-color: #171717;
  padding: 20px 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.container {
  width: 960px;
  margin: 0 auto;
  padding: 0px;
  position: relative;
}

.container:after,
.container:before {
  content: " ";
  display: table;
}

.container:after {
  clear: both;
}

/**************************** GRID COLUMNS **************** */

.grid-1,
.grid-2,
.grid-3,
.grid-4,
.grid-5,
.grid-6,
.grid-7,
.grid-8,
.grid-9,
.grid-10,
.grid-11,
.grid-12,
.grid-13,
.grid-14,
.grid-15,
.grid-16,
.grid-1-3 {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

.grid-1 {
  width: 40px;
}
.grid-2 {
  width: 100px;
}
.grid-3 {
  width: 160px;
}
.grid-4 {
  width: 220px;
}
.grid-5 {
  width: 280px;
}
.grid-6 {
  width: 340px;
}
.grid-7 {
  width: 400px;
}
.grid-8 {
  width: 460px;
}
.grid-9 {
  width: 520px;
}
.grid-10 {
  width: 580px;
}
.grid-11 {
  width: 640px;
}
.grid-12 {
  width: 700px;
}
.grid-13 {
  width: 760px;
}
.grid-14 {
  width: 820px;
}
.grid-15 {
  width: 880px;
}
.grid-16 {
  width: 940px;
}
.grid-1-3 {
  width: 300px;
}

@media only screen and (min-width: 788px) and (max-width: 979px) {
  .container {
    width: 768px;
  }

  .grid-1 {
    width: 28px;
  }
  .grid-2 {
    width: 76px;
  }
  .grid-3 {
    width: 124px;
  }
  .grid-4 {
    width: 172px;
  }
  .grid-5 {
    width: 220px;
  }
  .grid-6 {
    width: 268px;
  }
  .grid-7 {
    width: 316px;
  }
  .grid-8 {
    width: 364px;
  }
  .grid-9 {
    width: 412px;
  }
  .grid-10 {
    width: 460px;
  }
  .grid-11 {
    width: 508px;
  }
  .grid-12 {
    width: 556px;
  }
  .grid-13 {
    width: 604px;
  }
  .grid-14 {
    width: 652px;
  }
  .grid-15 {
    width: 700px;
  }
  .grid-16 {
    width: 748px;
  }
  .grid-1-3 {
    width: 236px;
  }
}

@media only screen and (max-width: 787px) {
  .container {
    width: 300px;
  }

  .grid-1,
  .grid-2,
  .grid-3,
  .grid-4,
  .grid-5,
  .grid-6,
  .grid-7,
  .grid-8,
  .grid-9,
  .grid-10,
  .grid-11,
  .grid-12,
  .grid-13,
  .grid-14,
  .grid-15,
  .grid-16,
  .grid-1-3 {
    width: 300px;
    margin: 0 0 20px 0;
    float: none;
  }
}
</style>

