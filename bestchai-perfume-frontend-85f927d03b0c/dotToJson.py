# dot_to_json_graph.py
# http://stackoverflow.com/questions/40262441/how-to-transform-a-dot-graph-to-json-graph

# Packages needed  :
# sudo aptitude install python-networkx python-pygraphviz
#
# Syntax :
# python dot_to_json_graph.py graph.dot

#import networkx as nx
#from networkx.readwrite import json_graph
import networkx;
from networkx.drawing.nx_agraph import read_dot;
from networkx.readwrite import json_graph;

import sys
import json;

if len(sys.argv)<=2:
  sys.stderr.write("Syntax : python %s dot_file\n" % sys.argv[0]);
else:
  dot_graph = read_dot(sys.argv[1]);
  data = json_graph.node_link_data(dot_graph);
  #json.dumps(data);
  output = sys.argv[2];
  text_file = open(output, "w")

  text_file.write(json.dumps(data));

  text_file.close()


