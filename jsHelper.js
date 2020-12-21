        function copyright()
        {
            console.log("Free to use, don't sell it");
            console.log("All rights reserved, created by Ács Róbert");
        }
        ////////////////////////////
        function geteid(id)
        {
            return document.getElementById(id);
            
        }
        function getesclass(osztaly,hanyadik)
        {
            return document.getElementsByClassName(osztaly)[hanyadik];
        }
        function getesname(name,hanyadik)
        {
            return document.getElementsByName(name)[hanyadik];
        }
        function getestag(tagname,hanyadik)
        {
            return document.getElementsByTagName(tagname)[hanyadik];
        }
        ////////////////////////////
        function dwrite(mit)
        {
            console.log(mit);
        }
        function colorwrite(mit, szin)
        {
            console.log(("%c"+mit), ("color:"+szin));
        }
        function stripe()
        {
            console.log("_____________________________________________");
        }
        function stripe(szin)
        {
            colorwrite("_____________________________________________",szin);
        }
        ////////////////////////////
        function ifclickedhelp()
        {
            colorwrite("Egy példa az ifclicked(gomb, fuggveny) kódolásához:","orange");
            var valami = 'var f = function(){console.log("megnyomtam")}; \nifclicked(getestag("button",0),f);';
            colorwrite(valami, "yellow");
            colorwrite("Ez így az első gombhoz ad egy onclicket melynek tartalma az első sor.\nPróbáld ki, katt az első gombra, ki fogja írni, hogy \"megnyomtam\"","orange")
        }
        function ifclicked(element,f)
        {
            element.onclick = f;
        }
