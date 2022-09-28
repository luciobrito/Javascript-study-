function pesquisa() {
    var frutas =
    [["Abacaxi","Maça"],
    ["Pessego","Cereja"],
    ["Morango"]]
    var valor = document.getElementById("fruta").value;

    if (valor == frutas[0][0]) {
        document.write("<h1>Abacaxi</h1>" + "<p>O ananás ou abacaxi é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais.</p>")
        document.write('<br>'+'<img src="img/abacaxi.jpg" alt="abacaxi"> ')
    }
    if(valor == frutas[0][1]){
        document.write("<h1>Maça</h1>"+"A maçã é o pseudofruto pomáceo da macieira, árvore da família Rosaceae. É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados ​​pelos seres humanos")
        document.write('<br>'+'<img src="img/maca.jpg" alt="">')
    }
    if(valor == frutas[1][0]){
        document.write("<h1>Pêssego</h1>"+"O pêssego é o fruto do pessegueiro, uma pequena árvore nativa da China, pertencente à família das rosáceas. O período de safra é de novembro a janeiro. Entre as espécies destacam-se a amarela e a branca. O pêssego é rico em fibras, bom para o funcionamento do intestino.")
        document.write('<br>'+'<img src="img/pessego.jpg">')
    }
    if(valor == frutas[1][1]){
        document.write("<h1>Cereja</h1>"+"Uma cereja é o fruto de muitas plantas do gênero Prunus. As cerejas do comércio geralmente são obtidas de cultivos de um número limitado de espécies, como a cerejeira-brava (Prunus avium) e a cereja-ácida (Prunus cerasus, ou Ginja). A Ginja, de polpa bem mais firme, é usada na fabricação de conservas, compotas e bebidas licorosas, como o kirsch, ginjinha e o marasquino. As cerejas contém proteínas, cálcio, ferro e vitaminas A, B, e C. ")
        document.write('<br>'+'<img src="img/cereja.jpg">')    
        }
    if(valor == frutas[2]){
        document.write("<h1>Morango</h1>"+"O morango é uma fruta vermelha, cuja origem é a Europa. Produzida pelo morangueiro, é um fruto rasteiro. Existem várias espécies de morango, sendo a fragaria a mais comum e cultivada em várias partes do mundo. É uma fruta pouco calórica, apresentando cerca de 32 kcal por 100 gramas de morango.")
        document.write('<br>'+'<img src="img/morango.jpg">')
    }
        }
        