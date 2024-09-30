function differenz(zahl: number){
    if (zahl > 27){
        console.log((zahl - 27) * 2);
    } else{
        console.log("Zahl zu niedrig");
    }
}
differenz(35) /* 16 */
differenz(74) /* 94 */
differenz(123) /* 192 */
differenz(27); // Zahl zu niedrig bei 27