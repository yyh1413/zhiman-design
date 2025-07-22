"use client";

import * as React from "react";
import { useCallback, useEffect, useState } from "react";

interface TreeNode {
  id: string;
  label: string;
  defaultChecked?: boolean;
  children?: TreeNode[];
}

interface CheckboxTreeProps {
  tree: TreeNode;
  renderNode: (props: {
    node: TreeNode;
    isChecked: boolean;
    onCheckedChange: (checked: boolean) => void;
    children?: React.ReactNode;
  }) => React.ReactNode;
  onSelectionChange?: (selectedIds: string[]) => void;
}

export function CheckboxTree({
  tree,
  renderNode,
  onSelectionChange,
}: CheckboxTreeProps) {
  const [checkedNodes, setCheckedNodes] = useState<Set<string>>(new Set());

  // Initialize with default checked nodes
  useEffect(() => {
    const defaultChecked = new Set<string>();
    const traverse = (node: TreeNode) => {
      if (node.defaultChecked) {
        defaultChecked.add(node.id);
      }
      node.children?.forEach(traverse);
    };
    traverse(tree);
    setCheckedNodes(defaultChecked);
  }, [tree]);

  // Get all child IDs for a node
  const getChildIds = useCallback((node: TreeNode): string[] => {
    const ids = [node.id];
    node.children?.forEach((child) => {
      ids.push(...getChildIds(child));
    });
    return ids;
  }, []);

  // Helper function to find a node by ID
  const findNodeById = useCallback(
    (node: TreeNode, id: string): TreeNode | undefined => {
      if (node.id === id) return node;
      if (node.children) {
        for (const child of node.children) {
          const found = findNodeById(child, id);
          if (found) return found;
        }
      }
      return undefined;
    },
    [],
  );

  // Get parent IDs for a node
  const getParentIds = useCallback(
    (nodeId: string, currentNode: TreeNode = tree): string[] => {
      if (currentNode.id === nodeId) return [];
      if (currentNode.children) {
        for (const child of currentNode.children) {
          const childIds = getChildIds(child);
          if (childIds.includes(nodeId)) {
            return [currentNode.id, ...getParentIds(nodeId, child)];
          }
        }
      }
      return [];
    },
    [tree, getChildIds],
  );

  // Handle node selection
  const handleNodeCheck = useCallback(
    (node: TreeNode, checked: boolean) => {
      const newCheckedNodes = new Set(checkedNodes);
      const childIds = getChildIds(node);
      const parentIds = getParentIds(node.id);

      if (checked) {
        // Add node and all its children
        childIds.forEach((id) => newCheckedNodes.add(id));
        // Check if all siblings are checked to update parent
        parentIds.forEach((parentId) => {
          const parent = findNodeById(tree, parentId);
          if (
            parent?.children?.every((child) => newCheckedNodes.has(child.id))
          ) {
            newCheckedNodes.add(parentId);
          }
        });
      } else {
        // Remove node and all its children
        childIds.forEach((id) => newCheckedNodes.delete(id));
        // Remove all parents
        parentIds.forEach((id) => newCheckedNodes.delete(id));
      }

      setCheckedNodes(newCheckedNodes);
      onSelectionChange?.(Array.from(newCheckedNodes));
    },
    [checkedNodes, getChildIds, getParentIds, onSelectionChange, tree, findNodeById],
  );

  // Render tree recursively
  const renderTree = useCallback(
    (node: TreeNode): React.ReactNode => {
      const isChecked = checkedNodes.has(node.id);
      const children: React.ReactNode[] | undefined = node.children?.map((child) => renderTree(child));

      return renderNode({
        node,
        isChecked,
        onCheckedChange: (checked) => handleNodeCheck(node, checked),
        children: children && <div className="ms-6 space-y-3">{children}</div>,
      });
    },
    [checkedNodes, handleNodeCheck, renderNode],
  );

  return <div className="space-y-3">{renderTree(tree)}</div>;
}
