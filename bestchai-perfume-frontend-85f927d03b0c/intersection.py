import os;
from pygraphviz import *;
from sets import Set;

maxIntersectionCount = 0;
intersect = [];

def buildNodeEdge(nodeMap, edgeMap, G):
	for node in G.nodes():
		label = node.attr.get('label');
		nodeMap[label] = node;

	for edge in G.edges():
		key = edge[0]+":"+edge[1];
		edgeMap[key] = 0;

def buildNodeMap(nodeMap, G):
	for node in G.nodes():
		label = node.attr.get('label');
		if label not in nodeMap:
			nodeMap[label] = [];
		nodeMap[label].append(node);

def buildEdgeMap(edgeMap, G):
	for edge in G.edges():
		edgeMap[edge[0] + ":" + edge[1]] = 0;

def calIntersection(identicalMap, s_edgeMap, p_edgeMap):
	intersectCount = 0;
	localIntersect = [];
	for s_edge in s_edgeMap.keys():
		s_pair = s_edge.split(':');
		p_src = identicalMap[s_pair[0]];
		p_dst = identicalMap[s_pair[1]];
		p_edge = p_src + ":" + p_dst;
		if p_edge in p_edgeMap:
			#s_edgeMap[s_edge] = 1;
			intersectCount += 1;
			localIntersect.append(s_edge);
	global maxIntersectionCount;
	global intersect;
	if intersectCount > maxIntersectionCount:
		maxIntersectionCount = intersectCount;		
		intersect = localIntersect;
		#print intersect;
		#print maxIntersectionCount;
	#print identicalMap;


def findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer):
	if p_labelPointer >= len(p_nodeMap):
		calIntersection(identicalMap, s_edgeMap, p_edgeMap);
	else:

		label = pLabels[p_labelPointer];
		
		#print label, p_nodeLen;
	
		s_node = s_nodeMap[label];
		
		p_nodes = p_nodeMap[label];
		for p_node in p_nodes:
			#print p_node, p_labelPointer, label;

			identicalMap[s_node] = p_node;
			findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer + 1);
		return;
	

def outputIntersection(G, outputfile):
	for edge in G.edges():
		s = edge[0]+":"+edge[1];
		
		if s not in intersect:
			G.remove_edge(edge[0],edge[1]);
			print edge
	
	
	G.write(outputfile);
	#G.layout(prog='dot');
	#G.draw(outputfile);
	#print G.string();


def main():
	f1 = "tmp/test.dot"; #synoptic
	f2 = "tmp/stringtoken.dot"; #perfume
	outputfile = "tmp/intersection.dot";
	G1 = AGraph(f1);
	G2 = AGraph(f2);

	s_nodeMap = {};
	s_edgeMap = {};

	buildNodeEdge(s_nodeMap, s_edgeMap, G1);
	'''
	print s_nodeMap;
	print;
	print s_edgeMap;
	print;
	#print s_nodeMap["StringTokenizer(java.lang.String, java.lang.String, boolean):::EXIT187"],s_edgeMap["1:0"];
	'''

	p_nodeMap = {};
	p_edgeMap = {};
	buildNodeMap(p_nodeMap, G2);
	buildEdgeMap(p_edgeMap, G2);
	"""
	print p_nodeMap;
	print;
	print p_edgeMap;
	print;
	"""

	identicalMap = {};
	#maxIntersectionCount = 0;
	#intersect = [];
	pLabels = p_nodeMap.keys();
	p_labelPointer = 0;
	findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer);
	
	print maxIntersectionCount;
	print intersect; #from synoptic
	print identicalMap; # synoptic: perfume

	outputIntersection(G1, outputfile);
	


if __name__ == "__main__":
    main()