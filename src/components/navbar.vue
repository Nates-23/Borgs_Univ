<template>
  <header id="header-container" class="body-contents-container">
    <section id="header-contents-container">
      <section id="logo-title-container" class="header-contents">
        <section id="logo-container" class="header-sub-con">
          <img id="cpu-logo" src="/src/assets/CPU_UNIV_LOGO.png" alt="CPU LOGO" width="100">
        </section>

        <section id="title-container" class="header-sub-con">
          <h1 id="school-name">Borgs University</h1>
          <p id="school-quote">Knowledge Drives a Brighter Tomorrow</p>
        </section>
      </section>

      <nav id="nav-container" class="header-contents">
  <ul id="links-container">

    <li class="links">
      <RouterLink
        to="/"
        class="actual-links"
        active-class="active-link"
      >
        Home
      </RouterLink>
    </li>

    <li class="links">
      <a class="actual-links">About</a>
    </li>

    <li class="links">
      <RouterLink
        to="/admissions"
        class="actual-links"
        active-class="active-link"
      >
        Admissions
      </RouterLink>
    </li>

    <li class="links">
      <a class="actual-links">Academics</a>
    </li>

    <li class="links">
      <a class="actual-links">Campus Life</a>
    </li>

    <li class="links">
      <a class="actual-links">News</a>
    </li>

    <li class="links">
      <a class="actual-links">Contacts</a>
    </li>

    <a id="search-icon">
      <img src="/src/assets/search.png" width="30">
    </a>

    <button id="login-btn">Portal Login</button>

  </ul>
</nav>
    </section>
  </header>
</template>

<style scoped>
#header-container {
  width: 100%;
  flex-shrink: 0
}

#header-contents-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.header-contents {
  height: 100%;
  
}

#logo-title-container,
#links-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

#logo-title-container {
  width: 40%;
}

#nav-container {
  width: 60%;
}

#links-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Arial;
}

.links {
  list-style: none;
  color: hsl(0, 0%, 31%);
  font-weight: bold;
  text-shadow: 0 0 1px hsl(0, 0%, 0%);
  
  font-size: 15px;
}

.active-link {
  color: hsl(276, 100%, 21%);
  font-size: 15px;
  text-decoration: underline 2px hsl(51, 100%, 36%);
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
}

.header-sub-con {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
}

#logo-container {
  width: 20%;
}

#title-container {
  width: 80%;
  align-items: flex-start;

}

#cpu-logo {
  width: 60px;
}

#school-name {
  color: hsl(276, 100%, 21%);
  text-shadow: 0 0 1px hsl(0, 0%, 0%);
  font-size: 40px;
  height: 10px;
}

#school-quote {
  color: hsl(51, 100%, 36%);
  text-shadow: 0 0 1px hsl(0, 0%, 0%);
  font-family: Arial;
}

#login-btn {
  width: 200px;
  height: 50px;
  background-color: hsl(276, 100%, 21%);
  border-radius: 10px;
  border: none;
  color: hsl(180, 100%, 99%);
  font-size: 20px;
  font-family: Arial;
  font-weight: 600;
  margin: 0 30px;
}
</style>
