<template>
    <Navbar />
    <body>
        <main id="main-container">
            <section id="main-content-container">
                <section id="left-content-container" class="main-contents">
                    <p id="left-quote">ESTABLISHED 1905</p>
                    <h1 class="left-titles">Exemplary Way of</h1>
                    <h1 class="left-titles">Education for Life.</h1>
                    <p id="paragraph">A leading Christian institutions in the Philippines, Borgs<br> University
                        nurture intellectual growth and spiritual<br> development through a commitment to<br>
                        Knowledge Drives a Brighter Tomorrow</br></p>
                        
                    <section id="buttons-container">
                        <button id="colored-btn" class="content-btn">Explore Academics</button>
                        <button id="second-btn" class="content-btn">Request Information</button>
                    </section>

                    <div class="stats-container">
                        <div class="stat-item">
                            <h3>118+</h3>
                            <p>Years of Excellence</p>
                        </div>
                        <div class="stat-item">
                            <h3>20+</h3>
                            <p>Academic Programs</p>
                        </div>
                        <div class="stat-item">
                            <h3>5,000+</h3>
                            <p>Active Students</p>
                        </div>
                        <div class="stat-item">
                            <h3>20+</h3>
                            <p>Partner Institutions</p>
                        </div>
                    </div>
                </section>

                <section id="right-content-container" class="main-contents">
                    <section id="right-contents">
                        <section id="right-image-container" class="right-sub-containers">
                            <img id="right-image" src="/src/assets/CPU_UNIV_LOGO.png" alt="CPU LOGO" width="100">
                        </section>
                        <section id="right-title-container" class="right-sub-containers">
                            <h1 id="main-school-name">Borgs <br>University</br></h1>
                            <p id="right-quote">Knowledge Drives a Brighter Tomorrow</p>
                        </section>
                        <div id="line-design"></div>
                        <section id="right-quote-container" class="right-sub-containers">
                            <p id="bottom-quote">"A Heritage of Excellence, <br>A Future of Faith"</p>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    </body>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 50vh;
}

#header-container {
    width: 100%;
    height: 20%;
}

#header-contents-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#main-container {
    width: 100%;
    min-height: 50vh;
    padding: 0 2rem;
    overflow: hidden;


}

#main-content-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-contents {
    width: 50%;
    height: 100%;
}

#left-content-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 2rem;
}

#left-quote {
    color: hsl(51, 78%, 43%);
    text-shadow: 0 0 1px hsl(0, 0%, 0%);
    font-size: 20px;
    font-family:'Gill Sans MT';
}

.left-titles {
    font-size: 2.5rem;
    color: hsl(276, 100%, 21%);
    text-shadow: 0 0 1px hsl(0, 0%, 0%);
    font-size: 80px;
}

#paragraph {
    color: hsl(0, 0%, 31%);
    padding-top: 1rem;
    font-size: 25px;
    font-family: 'Gill Sans MT';
}

#buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.content-btn {
    width: 300px;
    height: 50px;
    margin-right: 10px;
    color: hsl(276, 100%, 21%);
    font-size: 17px;
    font-weight: bold;
    border-radius: 8px;
}

#second-btn {
    border: 2px solid hsl(0, 0%, 52%);
    background-color: hsl(0, 0%, 100%);
}

#colored-btn {
    color: hsl(0, 0%, 100%);
    background-color: hsl(276, 100%, 21%)
}

#right-content-container {
    padding: 1rem 2rem 1rem 10rem;
}

#right-contents { 
  width: 100%; 
  height: 100%; 
  border-radius: 20px; 
  background: linear-gradient(135deg, gold 20%, white 60%); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
}

#line-design {
    width: 100px;
}

.right-sub-containers {
    width: 100%;
}

#right-image-container {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#right-image {
    width: 20%;
}

#right-title-container {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 2rem;
    font-size: 20px;
    color: hsl(51, 78%, 43%);

}

#right-quote-container {
    height: 18%;
    
}

#main-school-name {
    color: hsl(276, 100%, 21%);
    text-shadow: 0 0 1px hsl(0, 0%, 0%);
    font-size: 40px;
}

#right-quote-container {
    text-align: center;
    padding-top: 1.2rem;
    font-style: italic;
    color: hsl(0, 0%, 0%);
    font-family: arial;
    font-size: 20px;

}
#right-contents { 
  width: 100%; 
  height: 100%; 
  border-radius: 20px; 
  background: linear-gradient(135deg, gold 20%, white 60%); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
}


.stats-container {
  display: flex;
  clear: both;
  width: 100%;
  max-width: 550px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;
  margin-top: 25px;
  padding: 15px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.stat-item:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}

.stat-item h3 {
  font-size: 24px;
  font-weight: bold;
  color: #1a0dab;
  margin: 0 0 4px 0;
}

.stat-item p {
  font-size: 12px;
  color: #5f6368; 
  margin: 0;
}
</style>
