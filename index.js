var input = document.getElementById('input')
let count = 0
let count1 = 0
let størstAlder = 0
let totalAldere = []
let kortesteNavn = 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
let EleverMedFravær = []


input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
    console.log(rows);
    let eldsteElev = rows[1]
    let yngsteElev = rows[1]
    rows.forEach(element => {

        // Oppgave 1
        console.log(element[2] + " " + element[3]);
        // Oppgave 2
        if (element[11] == "kvinne") {
            console.log(element[2]);
            count++
        }
        // Oppgave 3
        if (element[11] == 'kvinne' && element[10] == '1MKB') {
            console.log(element[2]);
            count1++
        }
        // Oppgave 4
        let bilde = document.createElement("img") // Lager bildene
        bilde.src = element[7] // Gjør bildene om til riktig bilde
        bilde.style.width = '200px' // Gjør bildene riktig størrelse
        bilde.style.height = '200px'
        document.querySelector("#bilder").appendChild(bilde) // Legger til bildene i #bilder

        // Oppgave 6
        if (element[8] == 'Asker') {
          let bilde = document.createElement("img")
          bilde.src = element[7]
          bilde.style.width = '200px'
          bilde.style.height = '200px'
          document.querySelector("#oppgave6").appendChild(bilde)
        }
        
        // Oppgave 7
        
        if (typeof element[4] == 'number'){
          if (element[4] > størstAlder) {
            størstAlder = element[4]
            let riktig = element
            document.getElementById("oppgave7").innerHTML = `Den eldste personen er ${riktig[2]} ${riktig[3]}, og er ${riktig[4]}`
          }
        }

        // Oppgave 8
        if (typeof element[4] == 'number') {
          totalAldere.push(element[4])
          let totalAlder = totalAldere.reduce((a, b) => a + b, 0);
          let gjennomSnittAlder = totalAlder/(rows.length-1)
          document.getElementById("oppgave8").innerHTML = `Gjennomsnittalderen er ${gjennomSnittAlder} år`
        }
      
        // Oppgave 9
        if (element[2].length < kortesteNavn.length) {
          kortesteNavn = element[2]
        }

        // Oppgave 10
        if (element[12] > 6) {
          EleverMedFravær.push(element[2])
        }

        // Oppgave 11
        if (element[4]>eldsteElev[4]) {
          eldsteElev = element
        } else if (element[4]<yngsteElev[4]) {
          yngsteElev = element
        }

        // Oppgave 12
        if (element[4] == 15) {
          let bilde = document.createElement("img")
          bilde.src = element[7]
          let p = document.createElement("p")
          p.innerHTML = element[2] + ' ' + element[3]
          document.getElementById("oppgave12").appendChild(p)
          document.getElementById("oppgave12").appendChild(bilde)
        }
      });
    console.log(`På lista er det ${count} jenter, og ${count1} jenter som går 1MKB`);
    document.getElementById("oppgave9").innerText = kortesteNavn
    document.getElementById("oppgave10").innerText = `Elevene med mer enn 6 prosent fravær er ${EleverMedFravær}`
    document.getElementById("oppgave11").innerText = `Den yngste eleven er ${yngsteElev[2]} ${yngsteElev[3]}(${yngsteElev[4]}), og den eldste eleven er ${eldsteElev[2]} ${eldsteElev[3]}(${eldsteElev[4]})`

    // Oppgave 5
    let riktig = rows[14]

    let bilde = document.getElementById("oppgave5Bilde")
    bilde.src = riktig[7]
  })
})
