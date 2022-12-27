"use strict";
const SectionPlayer = document.querySelector('.Players');
const NextButton = document.querySelector('.RightArrow');
const MinAgeInput = document.querySelector('.MinimumAge');
const MaxAgeInput = document.querySelector('.MaxAge');
let arrayPlayers = [];
let nameArrayPlayers = [];
SectionPlayer?.addEventListener('mouseover', () => {
    NextButton?.classList.remove('None');
});
SectionPlayer?.addEventListener('mouseout', () => {
    setTimeout(() => NextButton?.classList.add('None'), 10000);
});
NextButton?.addEventListener('click', () => {
    fetch("")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayer?.removeChild(PlayerToBeRemove[index]);
            arrayPlayers.shift();
        }
        data.map((item) => {
            if (nameArrayPlayers.includes(item.name) === false && item.name !== undefined) {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayer');
                const SrcPlayer = document.createElement('img');
                SrcPlayer.src = item.urlImage;
                SrcPlayer.width = 150;
                CardPlayer.appendChild(SrcPlayer);
                const NamePlayer = document.createElement('h4');
                NamePlayer.textContent = item.name;
                NamePlayer.classList.add('PlayerName');
                CardPlayer.appendChild(NamePlayer);
                const AgePlayer = document.createElement('p');
                AgePlayer.textContent = item.year;
                AgePlayer.classList.add('PlayerAge');
                CardPlayer.appendChild(AgePlayer);
                SectionPlayer?.appendChild(CardPlayer);
                arrayPlayers.push(CardPlayer);
            }
        });
    });
});
MinAgeInput?.addEventListener('blur', () => {
    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        if (MaxAgeInput?.value === '') {
            return item.lastChild?.textContent >= MinAgeInput.value;
        }
        return item.lastChild?.textContent >= MinAgeInput.value && item.lastChild?.textContent <= MaxAgeInput?.value;
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer?.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer?.appendChild(item);
    });
});
MaxAgeInput?.addEventListener('blur', () => {
    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        if (MaxAgeInput?.value === '') {
            return item.lastChild?.textContent >= MinAgeInput.value;
        }
        return item.lastChild?.textContent >= MinAgeInput.value && item.lastChild?.textContent <= MaxAgeInput?.value;
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer?.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer?.appendChild(item);
    });
});
fetch("")
    .then((data) => {
    if (!data.ok) {
        console.log(data);
    }
    return data.json();
})
    .then((data) => {
    data.map((item) => {
        if (item.id === 1) {
            return;
        }
        const CardPlayer = document.createElement('div');
        CardPlayer.classList.add('ContainerPlayer');
        const SrcPlayer = document.createElement('img');
        SrcPlayer.src = item.urlImage;
        SrcPlayer.width = 150;
        CardPlayer.appendChild(SrcPlayer);
        const NamePlayer = document.createElement('h4');
        NamePlayer.textContent = item.name;
        NamePlayer.classList.add('PlayerName');
        CardPlayer.appendChild(NamePlayer);
        const AgePlayer = document.createElement('p');
        AgePlayer.textContent = item.year;
        AgePlayer.classList.add('PlayerAge');
        CardPlayer.appendChild(AgePlayer);
        arrayPlayers.length < 5 && (arrayPlayers.push(CardPlayer), nameArrayPlayers.push(NamePlayer.textContent));
        arrayPlayers.map((index) => {
            SectionPlayer?.appendChild(index);
        });
    });
});
