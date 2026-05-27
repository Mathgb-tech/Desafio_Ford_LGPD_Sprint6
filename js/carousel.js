
//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(imagem, texto, pagina) {
        this.imagem = imagem,
            this.texto = texto,
            this.pagina = pagina
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Render(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Render() {

        const track = document.querySelector(".carousel-track");

        carouselArr.forEach((item) => {

            track.innerHTML += `
            <a class="slide" href="${item.pagina}">
                <img src="img/${item.imagem}">
            </a>
        `;
        });

        Carousel.Update();
        Carousel.CreateRadio();
        Carousel.botoesFuncionando();
    }

    static Update() {

        const track =
            document.querySelector(".carousel-track");

        track.style.transform =
            `translateX(-${Carousel._sequence * 100}%)`;

            const imagemAtual = carouselArr[Carousel._sequence];

            const text = document.querySelector("#carousel-title");

            if (imagemAtual) text.innerHTML = `<a href="${imagemAtual.pagina}"><p> ${imagemAtual.texto} </p>` 

        Carousel.UpdateRadios();
    }

    static UpdateRadios() {

        const radios = document.querySelectorAll(
            'input[name="carousel-radio"]'
        );

        radios.forEach((radio, index) => {

            radio.checked =
                index === Carousel._sequence;

        });

    }

    static CreateRadio() {

        const radioContainer =
            document.getElementById("carousel-radio");

        radioContainer.innerHTML = "";

        carouselArr.forEach((_, index) => {

            radioContainer.innerHTML += `
            <input
                type="radio"
                name="carousel-radio"
                id="radio-${index}"
            >
        `;
        });

        Carousel.UpdateRadios();

        const radios =
            document.querySelectorAll(
                'input[name="carousel-radio"]'
            );

        radios.forEach((radio, index) => {

            radio.addEventListener("click", () => {

                Carousel._sequence = index;

                Carousel.Update();

            });

        });

    }

    static botoesFuncionando() {

        document.getElementById("esquerda").addEventListener("click", () => {
            clearInterval(Carousel._interval);
            this.Prev();
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 5000);
        })

        document.getElementById("direita").addEventListener("click", () => {
            clearInterval(Carousel._interval);
            this.Next();
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 5000);
        });
    }

    static Prev() {
        Carousel._sequence--;

        if (Carousel._sequence < 0) Carousel._sequence = Carousel._size - 1;

        Carousel.Update();
    }

    static Next() {
        Carousel._sequence++;

        if (Carousel._sequence > Carousel._size - 1) Carousel._sequence = 0;

        Carousel.Update();
    }
};
