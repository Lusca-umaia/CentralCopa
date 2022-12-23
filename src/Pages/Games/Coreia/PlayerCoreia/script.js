var SectionPlayer = document.querySelector('.Players');
var NextButton = document.querySelector('.RightArrow');
var MinAgeInput = document.querySelector('.MinimumAge');
var MaxAgeInput = document.querySelector('.MaxAge');
var arrayPlayers = [];
var nameArrayPlayers = [];
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseover', function () {
    NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.remove('None');
});
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseout', function () {
    setTimeout(function () { return NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.add('None'); }, 10000);
});
NextButton === null || NextButton === void 0 ? void 0 : NextButton.addEventListener('click', function () {
    fetch("")
        .then(function (data) {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then(function (data) {
        var newPlayersList = [];
        var PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
        for (var index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
            arrayPlayers.shift();
        }
        data.map(function (item) {
            if (nameArrayPlayers.includes(item.name) === false && item.name !== undefined) {
                newPlayersList.push(item.name);
                var CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayer');
                var SrcPlayer = document.createElement('img');
                SrcPlayer.src = item.urlImage;
                SrcPlayer.width = 150;
                CardPlayer.appendChild(SrcPlayer);
                var NamePlayer = document.createElement('h4');
                NamePlayer.textContent = item.name;
                NamePlayer.classList.add('PlayerName');
                CardPlayer.appendChild(NamePlayer);
                var AgePlayer = document.createElement('p');
                AgePlayer.textContent = item.year;
                AgePlayer.classList.add('PlayerAge');
                CardPlayer.appendChild(AgePlayer);
                SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(CardPlayer);
                arrayPlayers.push(CardPlayer);
            }
        });
    });
});
MinAgeInput === null || MinAgeInput === void 0 ? void 0 : MinAgeInput.addEventListener('blur', function () {
    var arrayPlayersFiltered = arrayPlayers.filter(function (item) {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    var PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (var index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map(function (item) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
});
MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.addEventListener('blur', function () {
    var arrayPlayersFiltered = arrayPlayers.filter(function (item) {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    var PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (var index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map(function (item) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
});
fetch("")
    .then(function (data) {
    if (!data.ok) {
        console.log(data);
    }
    return data.json();
})
    .then(function (data) {
    data.map(function (item) {
        if (item.id === 1) {
            return;
        }
        var CardPlayer = document.createElement('div');
        CardPlayer.classList.add('ContainerPlayer');
        var SrcPlayer = document.createElement('img');
        SrcPlayer.src = item.urlImage;
        SrcPlayer.width = 150;
        CardPlayer.appendChild(SrcPlayer);
        var NamePlayer = document.createElement('h4');
        NamePlayer.textContent = item.name;
        NamePlayer.classList.add('PlayerName');
        CardPlayer.appendChild(NamePlayer);
        var AgePlayer = document.createElement('p');
        AgePlayer.textContent = item.year;
        AgePlayer.classList.add('PlayerAge');
        CardPlayer.appendChild(AgePlayer);
        arrayPlayers.length < 5 && (arrayPlayers.push(CardPlayer), nameArrayPlayers.push(NamePlayer.textContent));
        arrayPlayers.map(function (index) {
            SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(index);
        });
    });
});
