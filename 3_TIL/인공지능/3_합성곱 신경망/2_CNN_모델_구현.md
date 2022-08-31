### Convolutional N. N.

가로x세로의 개념을 가지면서, Convolutional Filter(shared weight)가 sliding window 방식으로 돌아다니면서 dot product 함.

### C.N.N의 Convolutional Filter가 효과가 있는지 판단.

hidden-Layer처럼 Convolution Filter가 스스로 feature를 뽑아내는지 확인하면 됨.

---

관례적으로 하나의 Filter당 하나의 feature를 뽑아냄. 그러므로 여러개의 feature를 뽑아내기 위해서는 여러개의 Filter를 써야 함.

이 여러개의 Convolution Filter를 묶어놓은 것을 Convolution Layer라고 함.
