const projects = [
  {
    title: 'Multi-Post Stories',
    company: 'CANOPY',
    position: 'Back End Dev',
    date: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['html', 'css', 'javascript'],
    imageUrl: './images/work1.png',
    id: '1',
  },
  {
    title: 'Multi-Post Stories',
    company: 'Tonic',
    position: 'Back End Dev',
    date: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['html', 'css', 'javascript'],
    imageUrl: 'images/work2.svg',
    id: '2',
  },
  {
    title: 'Multi-Post Stories',
    company: 'CANOPY',
    position: 'Back End Dev',
    date: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['html', 'css', 'javascript'],
    imageUrl: './images/work3.svg',
    id: '3',
  },
  {
    title: 'Multi-Post Stories',
    company: 'Tonic',
    position: 'Back End Dev',
    date: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['html', 'css', 'javascript'],
    imageUrl: 'images/work2.svg',
    id: '4',
  },
];

const portfolioSection = document.getElementById('works');

/* eslint-disable no-tabs */
function generateHTML(details) {
  const template = `
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
                <img class="modal-close" src="./images/modal-close-btn.svg" alt="Closing Button" id="modal-close">
              </div>
              <div class="modal-data">
                <h2 class="work-name">${details.title}</h2>
          
                <div class="modal-data-tonic">
                <strong class="company">
                ${details.company}
                </strong>
                <img src="./images/Counter.png" class="counter" alt="counter" />
                <p class="works__single__details__single works__single__details__single--light">
                ${details.position}
                </p>
                <img src="./images/Counter.png" class="counter-modal" alt="counter" />
                <p class="works__single__details__single works__single__details__single--light">
                ${details.date}
                </p>
              </div>
              <div class="modal-image">
                <img src="${details.imageUrl}" alt="${details.title}" />
              </div>
              <div class="float-modal">
                <p>${details.body}</p>
              </div>
              <div class="tags modal-tags">
					<img src="./images/html.png" alt="html tag" class="work-tags" />
					<img src="./images/css.png" alt="css tag" class="work-tags" />
					<img
						src="./images/javascript.png"
						alt="javascript tag"
						class="work-tags"
					/>
					</div>
              </div>
              <div class="modal-links">
                <a href="./index.html"><button class="btn-input">See Live &nbsp;<img src="./images/see-live.svg" alt="See Live"></button></a>
                <a href="./index.html"><button class="btn-input">See Source &nbsp;<img src="./images/see-source.svg" alt="See Live"></button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

  return template;
}
/* eslint-enable no-tabs */

// eslint-disable-next-line array-callback-return
projects.map((project) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(project);

  portfolioSection.appendChild(HTMLElement);
});
