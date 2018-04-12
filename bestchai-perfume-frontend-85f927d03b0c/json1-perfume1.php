<?php

function main(){

// Delete old json object to avoid it being returned
$outputfh = fopen('/tmp/json_perfume.json', 'a') or die("can't open file");
fwrite($outputfh, "");
$a = $_POST['args'];
$reqID = $_POST['requestID'];
$jsonFile = "/tmp/jsonargs_perfume.txt";
$logfile = "/tmp/log_perfume.txt";
$logfh =  fopen($logfile, 'w') or die("can't open file");
fwrite($logfh, $_POST["logfile"]);
fclose($logfh);

$jsonfh = fopen($jsonFile, 'a') or die("can't open file");
fwrite($jsonfh, $a);
fwrite($jsonfh, "\n");
fwrite($jsonfh, "-o /tmp/json_perfume\n");
fwrite($jsonfh, "-j\n");
fclose($jsonfh);
$output = shell_exec(' ./perfume.sh --noModelOutput -c /tmp/jsonargs_perfume.txt ' . "/tmp/log_perfume.txt 2>&1");
$json = file_get_contents('/tmp/json.json');

$outputfh = fopen("/tmp/jsonout_perfume.txt", 'a') or die("can't open file");
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
