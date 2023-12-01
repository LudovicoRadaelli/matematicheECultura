/* ------ HTML ------ */
/* showHint vuole come parametro il numero dell'esercizio da mostrare (contando a partire da 0)

<br>
<button class="hint-button" onclick="showHint()">Soluzione</button>
<div class="hint"> 
    <p class="gray">
        <b>Soluzione:</b> 
        \[
            \begin{cases}
                x = -1
                \\\\
                y = 2
                \\\\
                z = 3
            \end{cases}
        \]
    </p>
</div>

*/

/* ------ JS ------ */

for(let i = 0; i < document.getElementsByClassName("hint").length; i++) {

    document.getElementsByClassName("hint")[i].style.display = "none";

}

function showHint(i) {
document.getElementsByClassName("hint-button")[i].style.display = "none";
document.getElementsByClassName("hint")[i].style.display = "block";
}  
