import os;
from pygraphviz import *;

def main():
	f1 = "tmp/test.dot";
	f2 = "tmp/stringtoken.dot";
	G1 = AGraph(f1);
	G2 = AGraph(f2);
	for edge in G1.edges():
		print edge[0];
		
	for node in G1.nodes():
		print node, node.attr.get('label');
  

if __name__ == "__main__":
	main()