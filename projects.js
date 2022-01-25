const projects = [
  {
    title: "Multi-Post Stories",
    company: "CANOPY",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ["html", "css", "javascript"],
    imageUrl: "./images/work1.png",
    id: "1",
  },
  {
    title: "Multi-Post Stories",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/work2.svg",
    id: "2"
  },
  {
    title: "Multi-Post Stories",
    company: "CANOPY",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ["html", "css", "javascript"],
    imageUrl: "./images/work3.svg",
    id: "3",
  },
  {
    title: "Multi-Post Stories",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/work2.svg",
    id: "4"
  },
];

const portfolioSection = document.getElementById("works");

projects.map((project) => {
  let HTMLElement = document.createElement("div");
  HTMLElement.innerHTML = generateHTML(project);

  portfolioSection.appendChild(HTMLElement);
});

function generateHTML(details) {
  let template = `
      <div class="work">
				<img
					src="${details.imageUrl}"
					alt="${details.title} screenshot"
					class="work1-pic"
				/>
				<div class="mob-data">
					<h2 class="work-name">${details.title}</h2>
					<div class="work-data-tonic">
						<strong class="company"> ${details.company} </strong>
						<img src="./images/Counter.png" class="counter" alt="counter" />
						<strong class="role">${details.position}</strong>
						<img src="./images/Counter.png" class="counter" alt="counter" />
						<strong class="year">${details.date}</strong>
					</div>
					<p class="paragraph-t">
						${details.desc}
					</p>
					<div class="tags">
						<img src="./images/html.png" alt="html tag" class="work-tags" />
						<img src="./images/css.png" alt="css tag" class="work-tags" />
						<img src="./images/javascript.png" alt="javascript tag" class="work-tags" />
					</div>
					<div>
						<button id="${details.id}" class="btn-input modal-open" data-modal="modal-${details.id}" type="submit">Get In Touch</button>
					</div>
				</div>
				<div class="work1-dsk"><img src="${details.imageUrl}" alt="${details.title} screenshot"/></div>
				<div class="work1-dsk-txt">
				<h3 class="work-name">${details.title}</h3>
					<div class="work-data-tonic">
					<strong class="company"> ${details.company} </strong>
					<img src="./images/Counter.png" class="counter" alt="counter" />
					<strong class="role">${details.position}</strong>
					<img src="./images/Counter.png" class="counter" alt="counter" />
					<strong class="year">${details.date}</strong>
					</div>
				<p class="paragraph-t">
					${details.desc}
				</p>
					<div class="tags">
					<img src="./images/html.png" alt="html tag" class="work-tags" />
					<img src="./images/css.png" alt="css tag" class="work-tags" />
					<img
						src="./images/javascript.png"
						alt="javascript tag"
						class="work-tags"
					/>
					</div>
					<div class="see-project">
					<button id="${details.id}" class="btn-input modal-open" data-modal="modal-${details.id}" type="submit">See Project</button>
					</div>
				</div>
			</div>


          <div class="modal" id="modal-${details.id}">
            <div class="modal-content">
              <div class="modal-close">
                <button id="modal-close" class="modal-close"><img class="modal-close" src="./images/closing_btn.svg" alt="Closing Button" id="close"></button>
              </div>
              <div class="works__single__holder">
                <h2 class="works__single__title">${details.title}</h2>
          
                <div class="works__single__details">
                <p class="works__single__details__single works__single__details__single--dark">
                ${details.company}
                </p>
                <div class="dot"></div>
                <p class="works__single__details__single works__single__details__single--light">
                ${details.position}
                </p>
                <div class="dot"></div>
                <p class="works__single__details__single works__single__details__single--light">
                ${details.date}
                </p>
              </div>
              <div class="works__single__img_container">
                <img class="works__single__img" src="${details.imageUrl}" alt="${details.title}" />
              </div>
              <div>
                <p>${details.body}</p>
              </div>
              <div class="works__single__tags hr">
                <div class="works__single__tags">
                <div class="works__single__tags__single">${details.languages[0]}</div>
                <div class="works__single__tags__single">${details.languages[1]}</div>
                <div class="works__single__tags__single">${details.languages[2]}</div>
              </div>
              </div>
              <div class="modal-links">
                <a href="./index.html"><button class="button">See Live <img src="./images/see-live.svg" alt="See Live"></button></a>
                <a href="./index.html"><button class="button">See Source <img src="./images/see-source.svg" alt="See Live"></button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

  return template;
}

