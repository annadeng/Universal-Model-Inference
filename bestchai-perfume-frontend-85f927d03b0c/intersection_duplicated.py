import os;
from pygraphviz import *;
from sets import Set;

maxIntersectionCount = 0;
intersect = [];
maxProb = 0.0;

def buildNodeEdge(nodeMap, edgeMap, G):
	for node in G.nodes():
		label = node.attr.get('label');
		nodeMap[label] = node;

	for edge in G.edges():
		key = edge[0]+":"+edge[1];
		prob = edge.attr.get('label');
		#print prob;
		edgeMap[key] = prob;

def buildNodeMap(nodeMap, G):
	for node in G.nodes():
		label = node.attr.get('label');
		if label not in nodeMap:
			nodeMap[label] = [];
		nodeMap[label].append(node);

	for label in nodeMap.keys():
		nodeMap[label].insert(0, 1);


def buildEdgeMap(edgeMap, G):
	for edge in G.edges():
		key = edge[0]+":"+edge[1]; 
		probstr = edge.attr.get('label');
		prob = 0;
		#print probstr, edge;
		if probstr != None and 'P' in probstr:
			prob = float(probstr.split(':')[1]);
		edgeMap[edge[0] + ":" + edge[1]] = prob;
'''
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
'''
#add probability
def calIntersection(identicalMap, s_edgeMap, p_edgeMap):
	intersectCount = 0;
	localIntersect = [];
	localProb = 0.0;
	for s_edge in s_edgeMap.keys():
		prob = s_edgeMap[s_edge];
		
		s_pair = s_edge.split(':');
		print s_pair[0], s_pair[1];
		print identicalMap;
		p_src = identicalMap[s_pair[0]];
		
		p_dst = identicalMap[s_pair[1]];
		p_edge = p_src + ":" + p_dst;
		if p_edge in p_edgeMap:
			#s_edgeMap[s_edge] = 1;
			localProb += float(prob);
			#print localProb;
			intersectCount += 1;
			localIntersect.append(s_edge);
	global maxIntersectionCount;
	global intersect;
	global maxProb;
	if (localProb > maxProb) or ((localProb == maxProb) and (intersectCount > maxIntersectionCount)):
		maxIntersectionCount = intersectCount;
		maxProb = localProb;
		intersect = localIntersect;
		#print intersect;
		#print maxIntersectionCount;
		#print maxProb;
		#print identicalMap;

def findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer):
	if p_labelPointer >= len(p_nodeMap):
		calIntersection(identicalMap, s_edgeMap, p_edgeMap);
	else:

		label = pLabels[p_labelPointer];
		if label == "getState_EXIT733":
			print True;
		s_nodes = s_nodeMap[label];
		index = s_nodes[0];
		if len(s_nodes) === 2:#only one node for this label
			s_node = s_nodes[index];
			
			p_nodes = p_nodeMap[label];
			for p_node in p_nodes[1:len(p_nodes)]:
				#print p_node, p_labelPointer, label;

				identicalMap[s_node] = p_node;
				#if s_node = '3':
				#	print "s_node";
				findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer + 1);
			return;
		else: #more than one nodes
			s_node = s_nodes[index];
			p_nodes = p_nodeMap[label];

		
		for p_node in p_nodes:
			#print p_node, p_labelPointer, label;
			index = s_nodes[0];
			identicalMap[s_nodes[index]] = p_node;
			s_nodes[0] +=1;
			print p_node, s_nodes[index];
			findIdenticalNode(s_nodeMap, p_nodeMap, pLabels, identicalMap, s_edgeMap, p_edgeMap, p_labelPointer + 1);
			s_nodes[0] -=1;	
			return;
	

def outputIntersection(G, outputfile, pngfile):
	for edge in G.edges():
		s = edge[0]+":"+edge[1];
		
		if s not in intersect:
			G.remove_edge(edge[0],edge[1]);
			print edge
	
	
	G.write(outputfile);
	G.layout(prog='dot');
	G.draw(pngfile,format='png',prog='dot')
	#print G.string();


def main():
	f1 = "tmp/SMTPProtocol/synoptictest_namefixed.dot"; #synoptic
	f2 = "tmp/SMTPProtocol/ktailtest_namefixed.dot"; #ktail
	f3 = "tmp/SMTPProtocol/perfumetest_namefixed.dot";#perfume
	
	f4 = "tmp/SMTPProtocol/intersection_synopitc_kTail.dot";
	f4_p = "tmp/SMTPProtocol/intersection_synopitc_kTail.png";
	f5 = "tmp/SMTPProtocol/intersection_final.dot";
	f5_p = "tmp/SMTPProtocol/intersection_final.png";
	
	
	outputfile = f4; #"tmp/StringTokenizer-models/intersection.dot";
	outputpng =  f4_p;#"tmp/StringTokenizer-models/intersection.png";
	G1 = AGraph(f1);
	G2 = AGraph(f2);

	s_nodeMap = {};
	s_edgeMap = {};

	buildNodeMap(s_nodeMap, G1);
	buildEdgeMap(s_edgeMap, G1);
	#buildNodeEdge(s_nodeMap, s_edgeMap, G1);
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
	print maxProb;
	print intersect; #from synoptic
	print identicalMap; # synoptic: perfume


	outputIntersection(G1, outputfile, outputpng);
	


if __name__ == "__main__":
    main()