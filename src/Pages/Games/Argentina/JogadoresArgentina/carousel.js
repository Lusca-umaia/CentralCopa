
        let quantAta = document.getElementsByClassName('QuantAta')
        let quantDef = document.getElementsByClassName('QuantDef')
        let QuantMc = document.getElementsByClassName('QuantMc')
        let QuantGole = document.getElementsByClassName('Quantgole')
        console.log(QuantGole)
        let controlAta = 0, controlDef = 0, controlMc = 0, controlGol = 0

        document.getElementById('avanAta').addEventListener('click', function () {
            controlAta += 1
            if (controlAta > quantAta.length - 1) {
                controlAta = 0
            }
            document.getElementById('groupSlides').style.transform = `translateX(${controlAta * (-290)}px)`
        })

        document.getElementById('retAta').addEventListener('click', function () {
            controlAta -= 1
            if (controlAta < 0) {
                controlAta = quantAta.length - 1
            }
            document.getElementById('groupSlides').style.transform = `translateX(${controlAta * (-290)}px)`
        })

        document.getElementById('avanDef').addEventListener('click', function () {
            controlDef += 1
            if (controlDef > quantDef.length - 1) {
                controlDef = 0
            }
            document.getElementById('groupSlidesTwo').style.transform = `translateX(${controlDef * (-290)}px)`
        })

        document.getElementById('retDef').addEventListener('click', function () {
            controlDef -= 1
            if (controlDef < 0) {
                controlDef = quantDef.length - 1
            }
            document.getElementById('groupSlidesTwo').style.transform = `translateX(${controlDef * (-290)}px)`
        })

        document.getElementById('avanMc').addEventListener('click', function () {
            controlMc += 1
            if (controlMc > QuantMc.length - 1) {
                controlMc = 0
            }
            document.getElementById('groupSlidesThree').style.transform = `translateX(${controlMc * (-290)}px)`
        })

        document.getElementById('retMc').addEventListener('click', function () {
            controlMc -= 1
            if (controlMc < 0) {
                controlMc = QuantMc.length - 1
            }
            document.getElementById('groupSlidesThree').style.transform = `translateX(${controlMc * (-290)}px)`
        })

        document.getElementById('avanGole').addEventListener('click', function () {
            controlGol += 1
            if (controlGol > QuantGole.length - 1) {
                controlGol = 0
            }
            document.getElementById('groupSlidesFour').style.transform = `translateX(${controlGol * (-290)}px)`
        })

        document.getElementById('retGole').addEventListener('click', function () {
            controlGol -= 1
            if (controlGol < 0) {
                controlGol = QuantGole.length - 1
            }
            document.getElementById('groupSlidesFour').style.transform = `translateX(${controlGol * (-290)}px)`
        })