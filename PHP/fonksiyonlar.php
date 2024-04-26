function ucgen($satirSayisi) {
    $satir = 1;
    while ($satir <= $satirSayisi) {
        for ($i = 1; $i <= $satir; $i++) {
            echo "O ";
        }
        echo "\n";
        $satir++;
    }
}

ucgen(15);
