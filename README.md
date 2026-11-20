# Catalog360 – Cultură Generală 🧠

O aplicație web în care înveți cultură generală prin lecții scurte și quiz-uri.

**▶ Deschide aplicația:** https://madalinagligor5-maker.github.io/catalog360/

## Ce conține

- **8 categorii:** Istorie, Geografie, Știință, Literatură, Artă & Muzică, România, Sport, Natură & Spațiu
- **📖 Învață:** 48 de fișe scurte, câte 6 pe categorie
- **🎯 Quiz:** 80 de întrebări, cu 20 de secunde pe întrebare și o explicație după fiecare răspuns
- **⚡ Provocarea zilei:** 5 întrebări noi în fiecare zi, aceleași pentru toată lumea
- **🔁 Repetă greșelile:** întrebările la care ai greșit revin până le știi
- **📊 Progres:** puncte XP, niveluri, serie de zile, precizie pe categorii și insigne
- Funcționează pe telefon și pe calculator și are temă luminoasă și întunecată
- Progresul se salvează în browser, nu e nevoie de cont

## Cum adaugi întrebări

Editează fișierul `data.js`. Fiecare întrebare arată așa:

```js
{ q: "Întrebarea?", a: ["Varianta A", "Varianta B", "Varianta C", "Varianta D"], c: 1, e: "Explicația" }
```

`c` este poziția răspunsului corect, numărată de la 0.

## Rulare locală

Nu are nevoie de instalare: deschide `index.html` în browser.
