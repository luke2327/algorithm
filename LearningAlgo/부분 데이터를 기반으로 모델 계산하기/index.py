import numpy as np
from scipy.optimize import curve_fit

def linear_model(n, a, b):
    return a * n + b

def quadratic_model(n, a, b):
    return a * n * n + b * n

xs = [100, 1000, 10000]
ys = [0.063, 0.565, 5.946]

[(a, b), _] = curve_fit(linear_model, np.array(xs), np.array(ys))
[(a_quad, b_quad), _] = curve_fit(quadratic_model, np.array(xs), np.array(ys))
print('Quadratic = {} * N^2 + {} * N'.format(a_quad, b_quad))

print('Linear = {} * N + {}'.format(a, b))