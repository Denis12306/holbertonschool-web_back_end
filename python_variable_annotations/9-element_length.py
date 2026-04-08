#!/usr/bin/env python3
"""Annotate the below function's parameters and return
values with the appropriate types"""
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """
    Element length functon documented
    """
    return [(i, len(i)) for i in lst]
