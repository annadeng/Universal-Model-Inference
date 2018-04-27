import os;
from pygraphviz import *;

def main():
	f1 = "synoptictest.dot";
	f2 = "perfumetest.dot";
	f3 = "ktailtest.KTails.pGraph-final.dot";

	G1 = AGraph(f1);
	G2 = AGraph(f2);
	G3 = AGraph(f3);

	processLabel(G1);
	G1.write("synoptictest_namefixed.dot")
	G1.draw("synoptictest_namefixed_png.png",format='png',prog='dot')

	processLabel(G2);
	G2.write("perfumetest_namefixed.dot")
	G2.draw("perfumetest_namefixed_png.png",format='png',prog='dot')

	processLabel(G3);
	G3.write("ktailtest_namefixed.dot")
	G3.draw("ktailtest_namefixed_png.png",format='png',prog='dot')

def processLabel(graph):
	for node in graph.nodes():
		preLabel = node.attr.get('label');

		#constructor processing
		if "(" in preLabel and ")" in preLabel:
			firstBracket = preLabel.find("(")
			secondBracket = preLabel.find(")")
			preLabel = preLabel.replace(preLabel[firstBracket+1:secondBracket], "")

		# states processing
		if ":::" in preLabel:
			preLabel = preLabel.replace("():::","_")
		if ";condition" in preLabel:
			if "not" in preLabel:
				preLabel = preLabel.replace(";condition=\"not(return == true)\"","_FALSE")
			else: 
				preLabel = preLabel.replace(";condition=\"return == true\"","_TRUE")

		node.attr.update(label=preLabel)
		print node, node.attr.get('label');

if __name__ == "__main__":
	main()