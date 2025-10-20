### Overview:
HighDimPDE.jl is a Julia package that implements deep learning-based solvers for high-dimensional partial differential equations. This approach effectively bypasses the "curse of dimensionality," a critical limitation of traditional numerical methods (like FDM/FEM) where computational cost grows exponentially with the number of dimensions.

### Features:

- Implemented deep learning based algorithms for solving parabolic partial differential equations a class of PDEs commonly used in physics and finance.
- Implemented an algorithm for Kolmogorov PDEs (common examples are Black Scholes and Fokker Planck Equations) that gives a solution over all parameters and distribution.
- Implemented deep learning based algorithms for obstacle PDEs, commonly defining optimal stopping problems such as pricing american options.
- Leveraged developed algorithms for parameter estimation. i.e. predicting volatility or interest rate from real world data.
- Leveraged developed algorithms for sensitivity analysis. i.e. calculating greeks (delta, vega or theta) given data.