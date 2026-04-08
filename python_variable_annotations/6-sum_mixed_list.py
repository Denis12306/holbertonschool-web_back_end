#!/usr/bin/env python3
"""Write a type-annotated function sum_mixed_list which takes a list mxd_lst
of integers and floats and returns their sum as a float."""


def sum_mixed_list(mxd_lst: list[int | float]) -> float:
    """
    Return the sum of mxd_lst
    """
    return float(sum(mxd_lst))
