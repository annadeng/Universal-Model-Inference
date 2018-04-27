//Perfume log and args
var browserlog = "164.163.76.74, cache-page, 0\n164.163.76.74, retrieve-page, 9\n164.163.76.74, cache-image, 18\n164.163.76.74, retrieve-image, 39\n164.163.76.74, quit, 160 \n237.250.28.190, cache-page, 0\n237.250.28.190, retrieve-page, 17\n237.250.28.190, cache-image, 34\n237.250.28.190, retrieve-image, 104 \n237.250.28.190, quit, 274 \n130.78.242.94, cache-page, 0\n130.78.242.94, retrieve-page, 9\n130.78.242.94, cache-image, 118 \n130.78.242.94, retrieve-image, 140 \n130.78.242.94, quit, 162 \n177.176.181.25, cache-page, 0\n177.176.181.25, retrieve-page, 17\n177.176.181.25, cache-image, 136 \n177.176.181.25, retrieve-image, 204 \n177.176.181.25, quit, 272 \n195.88.181.89, cache-image, 0\n195.88.181.89, retrieve-image, 27\n195.88.181.89, quit, 54\n153.98.187.29, cache-image, 0\n153.98.187.29, retrieve-image, 62\n153.98.187.29, quit, 124";
var browserargs = "-r (?<ip>.+), (?<TYPE>.+), (?<DTIME>.+)\n-m \\\\k<ip>";

var connectionlog = "19.38.218.11 [31/May/2014:31200.0] \"GET HTTP/1.1 /test-bandwidth\"\n19.38.218.11 [31/May/2014:31202.0] \"GET HTTP/1.1 /narrowband\"\n19.38.218.11 [31/May/2014:31205.7] \"GET HTTP/1.1 /query\"\n19.38.218.11 [31/May/2014:31208.9] \"GET HTTP/1.1 /query\"\n19.38.218.11 [31/May/2014:31209.7] \"GET HTTP/1.1 /report-normal\"\n95.39.21.28 [31/May/2014:31200.3] \"GET HTTP/1.1 /test-bandwidth\"\n95.39.21.28 [31/May/2014:31202.3] \"GET HTTP/1.1 /narrowband\"\n95.39.21.28 [31/May/2014:31206.0] \"GET HTTP/1.1 /query\"\n95.39.21.28 [31/May/2014:31206.8] \"GET HTTP/1.1 /report-normal\"\n210.82.199.247 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n210.82.199.247 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n210.82.199.247 [31/May/2014:31202.1] \"GET HTTP/1.1 /query\"\n210.82.199.247 [31/May/2014:31208.3] \"GET HTTP/1.1 /query\"\n210.82.199.247 [31/May/2014:31208.8] \"GET HTTP/1.1 /report-abnormal\"\n130.78.242.94 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n130.78.242.94 [31/May/2014:31200.7] \"GET HTTP/1.1 /broadband\"\n130.78.242.94 [31/May/2014:31201.9] \"GET HTTP/1.1 /query\"\n130.78.242.94 [31/May/2014:31208.0] \"GET HTTP/1.1 /query\"\n130.78.242.94 [31/May/2014:31208.4] \"GET HTTP/1.1 /report-abnormal\"\n38.151.1.182 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n38.151.1.182 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n38.151.1.182 [31/May/2014:31202.0] \"GET HTTP/1.1 /query\"\n38.151.1.182 [31/May/2014:31203.3] \"GET HTTP/1.1 /query\"\n38.151.1.182 [31/May/2014:31203.8] \"GET HTTP/1.1 /report-normal\"\n37.161.90.108 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n37.161.90.108 [31/May/2014:31200.9] \"GET HTTP/1.1 /broadband\"\n37.161.90.108 [31/May/2014:31202.2] \"GET HTTP/1.1 /query\"\n37.161.90.108 [31/May/2014:31203.6] \"GET HTTP/1.1 /query\"\n37.161.90.108 [31/May/2014:31204.7] \"GET HTTP/1.1 /report-normal\"";
var connectionargs = "-r (?<ip>) .+:(?<DTIME>.+)] \"GET HTTP/1.1 /(?<TYPE>.+)\"\n-m \\\\k<ip>";

var radiuslog = "0, 122.88.9.104, Access-Request\n64, 122.88.9.104, Access-Accept\n0, 102.24.169.15, Access-Request\n128, 102.24.169.15, Access-Accept\n0, 37.161.90.108, Access-Request\n64, 37.161.90.108, Access-Reject\n0, 91.83.112.9, Access-Request\n96, 91.83.112.9, Access-Reject\n0, 237.79.201.32, Access-Request\n2048, 237.79.201.32, Access-Challenge\n2144, 237.79.201.32, Access-Request\n2208, 237.79.201.32, Access-Reject\n0, 212.5.97.41, Access-Request\n3072, 212.5.97.41, Access-Challenge\n3184, 212.5.97.41, Access-Request\n3312, 212.5.97.41, Access-Reject\n0, 187.154.73.224, Access-Request\n64, 187.154.73.224, Access-Challenge\n192, 187.154.73.224, Access-Request\n320, 187.154.73.224, Access-Accept\n0, 46.8.192.199, Access-Request\n128, 46.8.192.199, Access-Challenge\n256, 46.8.192.199, Access-Request\n352, 46.8.192.199, Access-Accept";
var radiusargs = "-r (?<DTIME>.+), (?<ip>.+), (?<TYPE>.+)\n-m \\\\k<ip>";

var djqlog = "704.2: Executing list-queue on 111.133.89.93\n704.3: Executing play-song on 111.133.89.93\n709.0: Executing playing on 111.133.89.93\n721.0: Executing pause-song on 111.133.89.93\n721.1: Executing send-to-fs on 111.133.89.93\n723.2: Executing play-song on 111.133.89.93\n723.2: Executing playing on 111.133.89.93\n735.2: Executing quit on 111.133.89.93\n6.5: Executing list-queue on 156.198.35.201\n6.8: Executing play-song on 156.198.35.201\n15.0: Executing playing on 156.198.35.201\n30.8: Executing pause-song on 156.198.35.201\n31.0: Executing send-to-fs on 156.198.35.201\n33.6: Executing play-song on 156.198.35.201\n33.8: Executing playing on 156.198.35.201\n49.6: Executing quit on 156.198.35.201\n197.7: Executing list-queue on 54.244.13.11\n197.8: Executing play-song on 54.244.13.11\n202.5: Executing playing on 54.244.13.11\n214.5: Executing pause-song on 54.244.13.11\n214.6: Executing send-to-fs on 54.244.13.11\n214.8: Executing play-song on 54.244.13.11\n219.5: Executing playing on 54.244.13.11\n231.5: Executing quit on 54.244.13.11\n32749.9: Executing list-queue on 194.151.34.212\n32750.0: Executing play-song on 194.151.34.212\n32754.7: Executing playing on 194.151.34.212\n32766.7: Executing pause-song on 194.151.34.212\n32766.8: Executing send-to-fs on 194.151.34.212\n32768.9: Executing quit on 194.151.34.212\n52701.6: Executing list-queue on 160.74.176.131\n52701.9: Executing play-song on 160.74.176.131\n52710.1: Executing playing on 160.74.176.131\n52725.9: Executing pause-song on 160.74.176.131\n52726.1: Executing send-to-fs on 160.74.176.131\n52728.7: Executing play-song on 160.74.176.131\n52728.9: Executing playing on 160.74.176.131\n52744.7: Executing pause-song on 160.74.176.131\n52744.9: Executing send-to-fs on 160.74.176.131\n52747.5: Executing play-song on 160.74.176.131\n52747.7: Executing playing on 160.74.176.131\n52763.5: Executing quit on 160.74.176.131\n7.0: Executing list-queue on 71.46.186.222\n7.3: Executing play-song on 71.46.186.222\n15.5: Executing playing on 71.46.186.222\n31.3: Executing pause-song on 71.46.186.222\n31.5: Executing send-to-fs on 71.46.186.222\n32.0: Executing play-song on 71.46.186.222\n40.2: Executing playing on 71.46.186.222\n56.0: Executing quit on 71.46.186.222\n81865.4: Executing list-queue on 201.1.201.253\n81865.5: Executing play-song on 201.1.201.253\n81870.2: Executing playing on 201.1.201.253\n81882.2: Executing pause-song on 201.1.201.253\n81882.3: Executing send-to-fs on 201.1.201.253\n81884.4: Executing play-song on 201.1.201.253\n81884.4: Executing playing on 201.1.201.253\n81896.4: Executing pause-song on 201.1.201.253\n81896.5: Executing send-to-fs on 201.1.201.253\n81898.6: Executing play-song on 201.1.201.253\n81898.6: Executing playing on 201.1.201.253\n81910.6: Executing quit on 201.1.201.253\n539.8: Executing list-queue on 78.27.234.188\n539.9: Executing play-song on 78.27.234.188\n544.6: Executing playing on 78.27.234.188\n556.6: Executing pause-song on 78.27.234.188\n556.7: Executing send-to-fs on 78.27.234.188\n558.8: Executing play-song on 78.27.234.188\n558.8: Executing playing on 78.27.234.188\n570.8: Executing quit on 78.27.234.188\n4.6: Executing list-queue on 185.19.100.251\n4.9: Executing play-song on 185.19.100.251\n13.1: Executing playing on 185.19.100.251\n28.9: Executing pause-song on 185.19.100.251\n29.1: Executing send-to-fs on 185.19.100.251\n31.7: Executing play-song on 185.19.100.251\n31.9: Executing playing on 185.19.100.251\n47.7: Executing quit on 185.19.100.251\n50.6: Executing list-queue on 99.35.245.53\n50.7: Executing play-song on 99.35.245.53\n55.4: Executing playing on 99.35.245.53\n67.4: Executing pause-song on 99.35.245.53\n67.5: Executing send-to-fs on 99.35.245.53\n67.7: Executing play-song on 99.35.245.53\n72.4: Executing playing on 99.35.245.53\n84.4: Executing quit on 99.35.245.53\n45317.0: Executing list-queue on 202.113.50.52\n45317.1: Executing play-song on 202.113.50.52\n45321.8: Executing playing on 202.113.50.52\n45333.8: Executing pause-song on 202.113.50.52\n45333.9: Executing send-to-fs on 202.113.50.52\n45336.0: Executing quit on 202.113.50.52\n296.4: Executing list-queue on 152.208.115.1\n296.7: Executing play-song on 152.208.115.1\n304.9: Executing playing on 152.208.115.1\n320.7: Executing pause-song on 152.208.115.1\n320.9: Executing send-to-fs on 152.208.115.1\n323.5: Executing play-song on 152.208.115.1\n323.7: Executing playing on 152.208.115.1\n339.5: Executing pause-song on 152.208.115.1\n339.7: Executing send-to-fs on 152.208.115.1\n342.3: Executing play-song on 152.208.115.1\n342.5: Executing playing on 152.208.115.1\n358.3: Executing quit on 152.208.115.1\n9.1: Executing list-queue on 9.229.207.18\n9.4: Executing play-song on 9.229.207.18\n17.6: Executing playing on 9.229.207.18\n33.4: Executing pause-song on 9.229.207.18\n33.6: Executing send-to-fs on 9.229.207.18\n34.1: Executing play-song on 9.229.207.18\n42.3: Executing playing on 9.229.207.18\n58.1: Executing quit on 9.229.207.18\n375.9: Executing list-queue on 151.117.208.232\n376.0: Executing play-song on 151.117.208.232\n380.7: Executing playing on 151.117.208.232\n392.7: Executing pause-song on 151.117.208.232\n392.8: Executing send-to-fs on 151.117.208.232\n394.9: Executing play-song on 151.117.208.232\n394.9: Executing playing on 151.117.208.232\n406.9: Executing pause-song on 151.117.208.232\n407.0: Executing send-to-fs on 151.117.208.232\n409.1: Executing play-song on 151.117.208.232\n409.1: Executing playing on 151.117.208.232\n421.1: Executing quit on 151.117.208.232\n32987.5: Executing list-queue on 230.153.63.239\n32987.6: Executing play-song on 230.153.63.239\n32992.3: Executing playing on 230.153.63.239\n33004.3: Executing pause-song on 230.153.63.239\n33004.4: Executing send-to-fs on 230.153.63.239\n33006.5: Executing play-song on 230.153.63.239\n33006.5: Executing playing on 230.153.63.239\n33018.5: Executing quit on 230.153.63.239\n1.6: Executing list-queue on 128.219.90.59\n1.9: Executing play-song on 128.219.90.59\n10.1: Executing playing on 128.219.90.59\n25.9: Executing pause-song on 128.219.90.59\n26.1: Executing send-to-fs on 128.219.90.59\n28.7: Executing play-song on 128.219.90.59\n28.9: Executing playing on 128.219.90.59\n44.7: Executing quit on 128.219.90.59\n57.4: Executing list-queue on 237.190.56.82\n57.5: Executing play-song on 237.190.56.82\n62.2: Executing playing on 237.190.56.82\n74.2: Executing pause-song on 237.190.56.82\n74.3: Executing send-to-fs on 237.190.56.82\n74.5: Executing play-song on 237.190.56.82\n79.2: Executing playing on 237.190.56.82\n91.2: Executing quit on 237.190.56.82\n0.5: Executing list-queue on 224.46.134.171\n0.6: Executing play-song on 224.46.134.171\n5.3: Executing playing on 224.46.134.171\n17.3: Executing pause-song on 224.46.134.171\n17.4: Executing send-to-fs on 224.46.134.171\n19.5: Executing quit on 224.46.134.171\n1.3: Executing list-queue on 159.184.222.56\n1.6: Executing play-song on 159.184.222.56\n9.8: Executing playing on 159.184.222.56\n25.6: Executing pause-song on 159.184.222.56\n25.8: Executing send-to-fs on 159.184.222.56\n28.4: Executing play-song on 159.184.222.56\n28.6: Executing playing on 159.184.222.56\n44.4: Executing pause-song on 159.184.222.56\n44.6: Executing send-to-fs on 159.184.222.56\n47.2: Executing play-song on 159.184.222.56\n47.4: Executing playing on 159.184.222.56\n63.2: Executing quit on 159.184.222.56\n867.0: Executing list-queue on 137.83.57.146\n867.3: Executing play-song on 137.83.57.146\n875.5: Executing playing on 137.83.57.146\n891.3: Executing pause-song on 137.83.57.146\n891.5: Executing send-to-fs on 137.83.57.146\n892.0: Executing play-song on 137.83.57.146\n900.2: Executing playing on 137.83.57.146\n916.0: Executing quit on 137.83.57.146\n18691.3: Executing list-queue on 57.10.163.207\n18691.4: Executing play-song on 57.10.163.207\n18696.1: Executing playing on 57.10.163.207\n18708.1: Executing pause-song on 57.10.163.207\n18708.2: Executing send-to-fs on 57.10.163.207\n18710.3: Executing play-song on 57.10.163.207\n18710.3: Executing playing on 57.10.163.207\n18722.3: Executing pause-song on 57.10.163.207\n18722.4: Executing send-to-fs on 57.10.163.207\n18724.5: Executing play-song on 57.10.163.207\n18724.5: Executing playing on 57.10.163.207\n18736.5: Executing quit on 57.10.163.207";
var djqargs = "-r (?<DTIME>.+): Executing(?<TYPE>)on(?<ip>)\n-m \\\\k<ip>\n";

var shoppingcartlog ="74.15.155.103 [06/Jan/2011:07:24:13] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:24:19] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:25:33] \"GET HTTP/1.1 /invalid-coupon.php\"\n74.15.155.103 [06/Jan/2011:07:27:05] \"GET HTTP/1.1 /valid-coupon.php\"\n74.15.155.199 [06/Jan/2011:07:28:43] \"GET HTTP/1.1 /check-out.php\"\n74.15.155.103 [06/Jan/2011:07:28:14] \"GET HTTP/1.1 /reduce-price.php\"\n74.15.155.199 [06/Jan/2011:07:29:02] \"GET HTTP/1.1 /get-credit-card.php\"\n13.15.232.201 [06/Jan/2011:07:30:22] \"GET HTTP/1.1 /reduce-price.php\"\n74.15.155.103 [06/Jan/2011:07:30:55] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:31:17] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:31:20] \"GET HTTP/1.1 /get-credit-card.php\"\n74.15.155.103 [06/Jan/2011:07:31:44] \"GET HTTP/1.1 /get-credit-card.php\"";
var shoppingcartargs = "-r (?<ip>) .*(?<TIME>0).* \"GET HTTP/1.1 /(?<TYPE>.+).php\"\n-m \\\\k<ip>";

var smtpprotocol = "SMTPProtocol772111086 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol1377614405 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol164230583 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol164230583 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol1008646240 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol1008646240 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol1557520988 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol1557520988 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT177\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.ehlo(java.net.InetAddress):::EXIT298\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.startTLS():::EXIT232\nSMTPProtocol135868227 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol2046182713 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol2046182713 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol2046182713 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT186\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT177\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.ehlo(java.net.InetAddress):::EXIT298\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.mail(org.columba.ristretto.message.Address):::EXIT415\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.rcpt(org.columba.ristretto.message.Address):::EXIT445\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.data(java.io.InputStream):::EXIT535\nSMTPProtocol634779961 /// org.columba.ristretto.smtp.SMTPProtocol.quit():::EXIT559\nSMTPProtocol1009633633 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol1009633633 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol1009633633 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT186\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT177\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.ehlo(java.net.InetAddress):::EXIT298\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.mail(org.columba.ristretto.message.Address):::EXIT415\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.rcpt(org.columba.ristretto.message.Address):::EXIT445\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.data(java.io.InputStream):::EXIT535\nSMTPProtocol2118116222 /// org.columba.ristretto.smtp.SMTPProtocol.quit():::EXIT559\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT177\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.ehlo(java.net.InetAddress):::EXIT298\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.mail(org.columba.ristretto.message.Address):::EXIT415\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.rcpt(org.columba.ristretto.message.Address):::EXIT445\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.data(java.io.InputStream):::EXIT535\nSMTPProtocol148260869 /// org.columba.ristretto.smtp.SMTPProtocol.quit():::EXIT559\nSMTPProtocol467165034 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol467165034 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol467165034 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT186\nSMTPProtocol749595579 /// org.columba.ristretto.smtp.SMTPProtocol.SMTPProtocol(java.lang.String, int):::EXIT134\nSMTPProtocol749595579 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733\nSMTPProtocol749595579 /// org.columba.ristretto.smtp.SMTPProtocol.openPort():::EXIT177\nSMTPProtocol749595579 /// org.columba.ristretto.smtp.SMTPProtocol.ehlo(java.net.InetAddress):::EXIT298\nSMTPProtocol749595579 /// org.columba.ristretto.smtp.SMTPProtocol.getState():::EXIT733";
var smptargs = "-r (?<ip>) /// org.columba.ristretto.smtp.SMTPProtocol.(?<TYPE>.+)\n-m \\\\k<ip>";

//synoptic log and args
// var s_browserlog = "164.163.76.74, cache-page, 0\n164.163.76.74, retrieve-page, 9\n164.163.76.74, cache-image, 18\n164.163.76.74, retrieve-image, 39\n164.163.76.74, quit, 160 \n237.250.28.190, cache-page, 0\n237.250.28.190, retrieve-page, 17\n237.250.28.190, cache-image, 34\n237.250.28.190, retrieve-image, 104 \n237.250.28.190, quit, 274 \n130.78.242.94, cache-page, 0\n130.78.242.94, retrieve-page, 9\n130.78.242.94, cache-image, 118 \n130.78.242.94, retrieve-image, 140 \n130.78.242.94, quit, 162 \n177.176.181.25, cache-page, 0\n177.176.181.25, retrieve-page, 17\n177.176.181.25, cache-image, 136 \n177.176.181.25, retrieve-image, 204 \n177.176.181.25, quit, 272 \n195.88.181.89, cache-image, 0\n195.88.181.89, retrieve-image, 27\n195.88.181.89, quit, 54\n153.98.187.29, cache-image, 0\n153.98.187.29, retrieve-image, 62\n153.98.187.29, quit, 124";
var s_browserargs = "-r (?<ip>.+), (?<TYPE>.+), .+\n-m \\\\k<ip>";

// var s_connectionlog = "19.38.218.11 [31/May/2014:31200.0] \"GET HTTP/1.1 /test-bandwidth\"\n19.38.218.11 [31/May/2014:31202.0] \"GET HTTP/1.1 /narrowband\"\n19.38.218.11 [31/May/2014:31205.7] \"GET HTTP/1.1 /query\"\n19.38.218.11 [31/May/2014:31208.9] \"GET HTTP/1.1 /query\"\n19.38.218.11 [31/May/2014:31209.7] \"GET HTTP/1.1 /report-normal\"\n95.39.21.28 [31/May/2014:31200.3] \"GET HTTP/1.1 /test-bandwidth\"\n95.39.21.28 [31/May/2014:31202.3] \"GET HTTP/1.1 /narrowband\"\n95.39.21.28 [31/May/2014:31206.0] \"GET HTTP/1.1 /query\"\n95.39.21.28 [31/May/2014:31206.8] \"GET HTTP/1.1 /report-normal\"\n210.82.199.247 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n210.82.199.247 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n210.82.199.247 [31/May/2014:31202.1] \"GET HTTP/1.1 /query\"\n210.82.199.247 [31/May/2014:31208.3] \"GET HTTP/1.1 /query\"\n210.82.199.247 [31/May/2014:31208.8] \"GET HTTP/1.1 /report-abnormal\"\n130.78.242.94 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n130.78.242.94 [31/May/2014:31200.7] \"GET HTTP/1.1 /broadband\"\n130.78.242.94 [31/May/2014:31201.9] \"GET HTTP/1.1 /query\"\n130.78.242.94 [31/May/2014:31208.0] \"GET HTTP/1.1 /query\"\n130.78.242.94 [31/May/2014:31208.4] \"GET HTTP/1.1 /report-abnormal\"\n38.151.1.182 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n38.151.1.182 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n38.151.1.182 [31/May/2014:31202.0] \"GET HTTP/1.1 /query\"\n38.151.1.182 [31/May/2014:31203.3] \"GET HTTP/1.1 /query\"\n38.151.1.182 [31/May/2014:31203.8] \"GET HTTP/1.1 /report-normal\"\n37.161.90.108 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n37.161.90.108 [31/May/2014:31200.9] \"GET HTTP/1.1 /broadband\"\n37.161.90.108 [31/May/2014:31202.2] \"GET HTTP/1.1 /query\"\n37.161.90.108 [31/May/2014:31203.6] \"GET HTTP/1.1 /query\"\n37.161.90.108 [31/May/2014:31204.7] \"GET HTTP/1.1 /report-normal\"";
var s_connectionargs = "-r (?<ip>) .+ \"GET HTTP/1.1 /(?<TYPE>.+)\"\n-m \\\\k<ip>";

// var s_radiuslog = "0, 122.88.9.104, Access-Request\n64, 122.88.9.104, Access-Accept\n0, 102.24.169.15, Access-Request\n128, 102.24.169.15, Access-Accept\n0, 37.161.90.108, Access-Request\n64, 37.161.90.108, Access-Reject\n0, 91.83.112.9, Access-Request\n96, 91.83.112.9, Access-Reject\n0, 237.79.201.32, Access-Request\n2048, 237.79.201.32, Access-Challenge\n2144, 237.79.201.32, Access-Request\n2208, 237.79.201.32, Access-Reject\n0, 212.5.97.41, Access-Request\n3072, 212.5.97.41, Access-Challenge\n3184, 212.5.97.41, Access-Request\n3312, 212.5.97.41, Access-Reject\n0, 187.154.73.224, Access-Request\n64, 187.154.73.224, Access-Challenge\n192, 187.154.73.224, Access-Request\n320, 187.154.73.224, Access-Accept\n0, 46.8.192.199, Access-Request\n128, 46.8.192.199, Access-Challenge\n256, 46.8.192.199, Access-Request\n352, 46.8.192.199, Access-Accept";
var s_radiusargs = "-r .+, (?<ip>.+), (?<TYPE>.+)\n-m \\\\k<ip>";

// var s_djqlog = "704.2: Executing list-queue on 111.133.89.93\n704.3: Executing play-song on 111.133.89.93\n709.0: Executing playing on 111.133.89.93\n721.0: Executing pause-song on 111.133.89.93\n721.1: Executing send-to-fs on 111.133.89.93\n723.2: Executing play-song on 111.133.89.93\n723.2: Executing playing on 111.133.89.93\n735.2: Executing quit on 111.133.89.93\n6.5: Executing list-queue on 156.198.35.201\n6.8: Executing play-song on 156.198.35.201\n15.0: Executing playing on 156.198.35.201\n30.8: Executing pause-song on 156.198.35.201\n31.0: Executing send-to-fs on 156.198.35.201\n33.6: Executing play-song on 156.198.35.201\n33.8: Executing playing on 156.198.35.201\n49.6: Executing quit on 156.198.35.201\n197.7: Executing list-queue on 54.244.13.11\n197.8: Executing play-song on 54.244.13.11\n202.5: Executing playing on 54.244.13.11\n214.5: Executing pause-song on 54.244.13.11\n214.6: Executing send-to-fs on 54.244.13.11\n214.8: Executing play-song on 54.244.13.11\n219.5: Executing playing on 54.244.13.11\n231.5: Executing quit on 54.244.13.11\n32749.9: Executing list-queue on 194.151.34.212\n32750.0: Executing play-song on 194.151.34.212\n32754.7: Executing playing on 194.151.34.212\n32766.7: Executing pause-song on 194.151.34.212\n32766.8: Executing send-to-fs on 194.151.34.212\n32768.9: Executing quit on 194.151.34.212\n52701.6: Executing list-queue on 160.74.176.131\n52701.9: Executing play-song on 160.74.176.131\n52710.1: Executing playing on 160.74.176.131\n52725.9: Executing pause-song on 160.74.176.131\n52726.1: Executing send-to-fs on 160.74.176.131\n52728.7: Executing play-song on 160.74.176.131\n52728.9: Executing playing on 160.74.176.131\n52744.7: Executing pause-song on 160.74.176.131\n52744.9: Executing send-to-fs on 160.74.176.131\n52747.5: Executing play-song on 160.74.176.131\n52747.7: Executing playing on 160.74.176.131\n52763.5: Executing quit on 160.74.176.131\n7.0: Executing list-queue on 71.46.186.222\n7.3: Executing play-song on 71.46.186.222\n15.5: Executing playing on 71.46.186.222\n31.3: Executing pause-song on 71.46.186.222\n31.5: Executing send-to-fs on 71.46.186.222\n32.0: Executing play-song on 71.46.186.222\n40.2: Executing playing on 71.46.186.222\n56.0: Executing quit on 71.46.186.222\n81865.4: Executing list-queue on 201.1.201.253\n81865.5: Executing play-song on 201.1.201.253\n81870.2: Executing playing on 201.1.201.253\n81882.2: Executing pause-song on 201.1.201.253\n81882.3: Executing send-to-fs on 201.1.201.253\n81884.4: Executing play-song on 201.1.201.253\n81884.4: Executing playing on 201.1.201.253\n81896.4: Executing pause-song on 201.1.201.253\n81896.5: Executing send-to-fs on 201.1.201.253\n81898.6: Executing play-song on 201.1.201.253\n81898.6: Executing playing on 201.1.201.253\n81910.6: Executing quit on 201.1.201.253\n539.8: Executing list-queue on 78.27.234.188\n539.9: Executing play-song on 78.27.234.188\n544.6: Executing playing on 78.27.234.188\n556.6: Executing pause-song on 78.27.234.188\n556.7: Executing send-to-fs on 78.27.234.188\n558.8: Executing play-song on 78.27.234.188\n558.8: Executing playing on 78.27.234.188\n570.8: Executing quit on 78.27.234.188\n4.6: Executing list-queue on 185.19.100.251\n4.9: Executing play-song on 185.19.100.251\n13.1: Executing playing on 185.19.100.251\n28.9: Executing pause-song on 185.19.100.251\n29.1: Executing send-to-fs on 185.19.100.251\n31.7: Executing play-song on 185.19.100.251\n31.9: Executing playing on 185.19.100.251\n47.7: Executing quit on 185.19.100.251\n50.6: Executing list-queue on 99.35.245.53\n50.7: Executing play-song on 99.35.245.53\n55.4: Executing playing on 99.35.245.53\n67.4: Executing pause-song on 99.35.245.53\n67.5: Executing send-to-fs on 99.35.245.53\n67.7: Executing play-song on 99.35.245.53\n72.4: Executing playing on 99.35.245.53\n84.4: Executing quit on 99.35.245.53\n45317.0: Executing list-queue on 202.113.50.52\n45317.1: Executing play-song on 202.113.50.52\n45321.8: Executing playing on 202.113.50.52\n45333.8: Executing pause-song on 202.113.50.52\n45333.9: Executing send-to-fs on 202.113.50.52\n45336.0: Executing quit on 202.113.50.52\n296.4: Executing list-queue on 152.208.115.1\n296.7: Executing play-song on 152.208.115.1\n304.9: Executing playing on 152.208.115.1\n320.7: Executing pause-song on 152.208.115.1\n320.9: Executing send-to-fs on 152.208.115.1\n323.5: Executing play-song on 152.208.115.1\n323.7: Executing playing on 152.208.115.1\n339.5: Executing pause-song on 152.208.115.1\n339.7: Executing send-to-fs on 152.208.115.1\n342.3: Executing play-song on 152.208.115.1\n342.5: Executing playing on 152.208.115.1\n358.3: Executing quit on 152.208.115.1\n9.1: Executing list-queue on 9.229.207.18\n9.4: Executing play-song on 9.229.207.18\n17.6: Executing playing on 9.229.207.18\n33.4: Executing pause-song on 9.229.207.18\n33.6: Executing send-to-fs on 9.229.207.18\n34.1: Executing play-song on 9.229.207.18\n42.3: Executing playing on 9.229.207.18\n58.1: Executing quit on 9.229.207.18\n375.9: Executing list-queue on 151.117.208.232\n376.0: Executing play-song on 151.117.208.232\n380.7: Executing playing on 151.117.208.232\n392.7: Executing pause-song on 151.117.208.232\n392.8: Executing send-to-fs on 151.117.208.232\n394.9: Executing play-song on 151.117.208.232\n394.9: Executing playing on 151.117.208.232\n406.9: Executing pause-song on 151.117.208.232\n407.0: Executing send-to-fs on 151.117.208.232\n409.1: Executing play-song on 151.117.208.232\n409.1: Executing playing on 151.117.208.232\n421.1: Executing quit on 151.117.208.232\n32987.5: Executing list-queue on 230.153.63.239\n32987.6: Executing play-song on 230.153.63.239\n32992.3: Executing playing on 230.153.63.239\n33004.3: Executing pause-song on 230.153.63.239\n33004.4: Executing send-to-fs on 230.153.63.239\n33006.5: Executing play-song on 230.153.63.239\n33006.5: Executing playing on 230.153.63.239\n33018.5: Executing quit on 230.153.63.239\n1.6: Executing list-queue on 128.219.90.59\n1.9: Executing play-song on 128.219.90.59\n10.1: Executing playing on 128.219.90.59\n25.9: Executing pause-song on 128.219.90.59\n26.1: Executing send-to-fs on 128.219.90.59\n28.7: Executing play-song on 128.219.90.59\n28.9: Executing playing on 128.219.90.59\n44.7: Executing quit on 128.219.90.59\n57.4: Executing list-queue on 237.190.56.82\n57.5: Executing play-song on 237.190.56.82\n62.2: Executing playing on 237.190.56.82\n74.2: Executing pause-song on 237.190.56.82\n74.3: Executing send-to-fs on 237.190.56.82\n74.5: Executing play-song on 237.190.56.82\n79.2: Executing playing on 237.190.56.82\n91.2: Executing quit on 237.190.56.82\n0.5: Executing list-queue on 224.46.134.171\n0.6: Executing play-song on 224.46.134.171\n5.3: Executing playing on 224.46.134.171\n17.3: Executing pause-song on 224.46.134.171\n17.4: Executing send-to-fs on 224.46.134.171\n19.5: Executing quit on 224.46.134.171\n1.3: Executing list-queue on 159.184.222.56\n1.6: Executing play-song on 159.184.222.56\n9.8: Executing playing on 159.184.222.56\n25.6: Executing pause-song on 159.184.222.56\n25.8: Executing send-to-fs on 159.184.222.56\n28.4: Executing play-song on 159.184.222.56\n28.6: Executing playing on 159.184.222.56\n44.4: Executing pause-song on 159.184.222.56\n44.6: Executing send-to-fs on 159.184.222.56\n47.2: Executing play-song on 159.184.222.56\n47.4: Executing playing on 159.184.222.56\n63.2: Executing quit on 159.184.222.56\n867.0: Executing list-queue on 137.83.57.146\n867.3: Executing play-song on 137.83.57.146\n875.5: Executing playing on 137.83.57.146\n891.3: Executing pause-song on 137.83.57.146\n891.5: Executing send-to-fs on 137.83.57.146\n892.0: Executing play-song on 137.83.57.146\n900.2: Executing playing on 137.83.57.146\n916.0: Executing quit on 137.83.57.146\n18691.3: Executing list-queue on 57.10.163.207\n18691.4: Executing play-song on 57.10.163.207\n18696.1: Executing playing on 57.10.163.207\n18708.1: Executing pause-song on 57.10.163.207\n18708.2: Executing send-to-fs on 57.10.163.207\n18710.3: Executing play-song on 57.10.163.207\n18710.3: Executing playing on 57.10.163.207\n18722.3: Executing pause-song on 57.10.163.207\n18722.4: Executing send-to-fs on 57.10.163.207\n18724.5: Executing play-song on 57.10.163.207\n18724.5: Executing playing on 57.10.163.207\n18736.5: Executing quit on 57.10.163.207";
var s_djqargs = "-r .+: Executing(?<TYPE>)on(?<ip>)\n-m \\\\k<ip>\n";

// var s_shoppingcartlog ="74.15.155.103 [06/Jan/2011:07:24:13] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:24:19] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:25:33] \"GET HTTP/1.1 /invalid-coupon.php\"\n74.15.155.103 [06/Jan/2011:07:27:05] \"GET HTTP/1.1 /valid-coupon.php\"\n74.15.155.199 [06/Jan/2011:07:28:43] \"GET HTTP/1.1 /check-out.php\"\n74.15.155.103 [06/Jan/2011:07:28:14] \"GET HTTP/1.1 /reduce-price.php\"\n74.15.155.199 [06/Jan/2011:07:29:02] \"GET HTTP/1.1 /get-credit-card.php\"\n13.15.232.201 [06/Jan/2011:07:30:22] \"GET HTTP/1.1 /reduce-price.php\"\n74.15.155.103 [06/Jan/2011:07:30:55] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:31:17] \"GET HTTP/1.1 /check-out.php\"\n13.15.232.201 [06/Jan/2011:07:31:20] \"GET HTTP/1.1 /get-credit-card.php\"\n74.15.155.103 [06/Jan/2011:07:31:44] \"GET HTTP/1.1 /get-credit-card.php\"";
var s_shoppingcartargs = "-r (?<ip>) .+ \"GET HTTP/1.1 /(?<TYPE>.+).php\"\n-m \\\\k<ip>";

var signaturelog = "Signature337152244 /// java.security.Signature.Signature(java.lang.String):::EXIT137\nSignature337152244 /// java.security.Signature.initVerify(java.security.PublicKey):::EXIT422\nSignature337152244 /// java.security.Signature.update(byte[]):::EXIT668";
var signatureargs = "-r (?<ip>) /// (?<TYPE>.+)\n-m \\\\k<ip>";


var logstring;
var argstring;

var modelname;
var alg;

function writeSignatureModel(modelname) {
    this.modelname = modelname
    logstring = signaturelog; 
    $("#logtext").val(logstring);
}

function writeBrowserModel(modelname) {
    this.modelname = modelname
    logstring = browserlog; 
    $("#logtext").val(logstring);
}

function writeConnectionModel(modelname) {
    logstring = connectionlog;
    this.modelname = modelname
    $("#logtext").val(logstring);
}

function writeRadiusModel(modelname) {
    logstring = radiuslog;
    this.modelname = modelname
    $("#logtext").val(logstring);
}

function writedjQModel(modelname) {
    logstring = djqlog;
    this.modelname = modelname
    $("#logtext").val(logstring);
}

function writeShoppingCartModel(modelname) {
    logstring = shoppingcartlog;
    this.modelname = modelname
    $("#logtext").val(logstring);
}

function writeSMTPProtocol(modelname){
	logstring = smtpprotocol;
	this.modelname = modelname
	$("#logtext").val(logstring);
}


function writePerfumeArg(alg){
	this.alg = alg;
    switch(modelname){
        case "browser":
            argstring = browserargs;
            break;
        case "connection":
            argstring = connectionargs;
            break;
        case "radius":
            argstring = radiusargs;
            break;
        case "djq":
            argstring = djqargs;
            break;
        case "shopping":
            argstring = shoppingcartargs;
            break;
        case "signature":
        	argstring = signatureargs;
        	break;
        case "smtp":
        	argstring = smptargs;
        	break;
    }
    $("#argsfield").val(argstring);

}

// function writeArg(alg){
// 	this.alg = alg;
//     switch(modelname){
//         case "browser":
//             argstring = browserargs + '\n' + s_browserargs;
//             break;
//         case "connection":
//             argstring = connectionargs + '\n' + s_connectionargs;
//             break;
//         case "radius":
//             argstring = radiusargs + '\n' + s_radiusargs;
//             break;
//         case "djq":
//             argstring = djqargs + '\n' + s_djqargs;
//             break;
//         case "shopping":
//             argstring = shoppingcartargs + '\n' + s_shoppingcartargs;
//             break;

//     }
//     $("#argsfield").val(argstring);

// }

function writeSynopticArg(alg){
	this.alg = alg;
    switch(modelname){
        case "browser":
            argstring = s_browserargs;
            break;
        case "connection":
            argstring = s_connectionargs;
            break;
        case "radius":
            argstring = s_radiusargs;
            break;
        case "djq":
            argstring = s_djqargs;
            break;
        case "shopping":
            argstring = s_shoppingcartargs;
            break;
        case "signature":
        	argstring = signatureargs;
        	break;
       	case "smtp":
        	argstring = smptargs;
        	break;
    }
    $("#argsfield").val(argstring);
}

function writeKTailArg(alg){
	this.alg = alg;
    switch(modelname){
        case "browser":
            argstring = s_browserargs;
            break;
        case "connection":
            argstring = s_connectionargs;
            break;
        case "radius":
            argstring = s_radiusargs;
            break;
        case "djq":
            argstring = s_djqargs;
            break;
        case "shopping":
            argstring = s_shoppingcartargs;
            break;
        case "smtp":
        	argstring = smptargs;
        	break;
    }
    $("#argsfield").val(argstring);
}

function getAlg(){
	return this.alg;
}

// function write() {
//     $("#logtext").val(logstring);
//     $("#argsfield").val(argstring);
// }

// given an array of line numbers, returns the corresponding array of strings from the input logs
function getLines(lineNumbers) {
    var allLines = $('#logtext').val().split('\n'); // all lines, with the first line at index 0
    var selectedLines = [];

    for(var i=0; i<allLines.length; i++) {
        if(lineNumbers.indexOf(i+1) !== -1) { // line numbers in the log start at 1
            selectedLines.push(allLines[i]);
        }
    }

    return selectedLines;
}

//given an array of lines, removes said lines from the input logs
function removeLines(lineNumbers) {
    var allLines = $('#logtext').val().split('\n');
    var newLines = [];

    for(var i=0; i<allLines.length; i++) {
        if(lineNumbers.indexOf(i+1) === -1) { // line numbers in the log start at 1
            newLines.push(allLines[i]);
        }
    }

    $('#logtext').val(newLines.join('\n'));
}

// if input changes and the model is already inferred, clear everything except for the input boxes
$( '.input' ).on('input', function() {
    var graphExists = $('.nodes').length;
    var modelIsInferred = $('.nodes').children().length;
    if(graphExists && modelIsInferred) {
        clearDataExceptForm(); // index.js
    }
});

// enable argument tooltip
$(function() {
    $("#argument-tip").tooltip();
});
