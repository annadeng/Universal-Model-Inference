<?php

function main(){
	$outputfh = fopen('/tmp/json.json', 'w') or die("can't open file");
	fwrite($outputfh, "tests");
}

main();

?>