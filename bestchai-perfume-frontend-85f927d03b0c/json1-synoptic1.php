<?php

function main(){

// Delete old json object to avoid it being returned
$outputfh = fopen('/tmp/json_synoptic.json', 'w') or die("can't open file");
fwrite($outputfh, "");
$a = $_POST['args'];
$reqID = $_POST['requestID'];
$jsonFile = "/tmp/jsonargs_synoptic.txt";
$logfile = "/tmp/log_synoptic.txt";
$logfh =  fopen($logfile, 'w') or die("can't open file");
fwrite($logfh, $_POST["logfile"]);
fclose($logfh);

$jsonfh = fopen($jsonFile, 'w') or die("can't open file");
fwrite($jsonfh, $a);
fwrite($jsonfh, "\n");
fwrite($jsonfh, "-o /tmp/json_synoptic\n");
fwrite($jsonfh, "-j\n");
fclose($jsonfh);
$output = shell_exec(' ./synoptic.sh --noModelOutput -c /tmp/jsonargs_synoptic.txt ' . "/tmp/log_synoptic.txt 2>&1");
$json = file_get_contents('/tmp/json_synoptic.json');

$outputfh = fopen("/tmp/jsonout_synoptic.txt", 'w') or die("can't open file");
fwrite($outputfh, $output);

// Check for SEVERE messages that indicate an error
if ($json === "" || preg_match("/\nSEVERE:/", $output)
      || preg_match("/\nWARNING: Using a default regular expression to parse/", $output))  {
    header('HTTP/1.1 500 Internal Server Error');
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array("message" => $output, "responseID" => $reqID)));
}
else {
    $jsonArr = json_decode($json, true);
    $jsonArr["responseID"] = $reqID;
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    echo json_encode($jsonArr);
}
}

main();

?>
