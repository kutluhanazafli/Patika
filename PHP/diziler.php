function createRandomValues($array, $count) {
    // Remove empty elements
    $cleanedArray = array_filter($array);

    // Select random indices
    $randomIndices = array_rand($cleanedArray, $count);

    // Get random values
    $randomValues = array_map(function($index) use ($cleanedArray) {
        return $cleanedArray[$index];
    }, $randomIndices);

    return $randomValues;
}

$planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "", "", NULL];

echo "<pre>";
print_r(createRandomValues($planets, 2));
print_r(createRandomValues($planets, 3));
print_r(createRandomValues($planets, 2));
print_r(createRandomValues($planets, 4));
print_r(createRandomValues($planets, 5));
echo "</pre>";
