### 데이터의 과적합(Overfitting) 문제의 해결 방법 - Dropout의 개념

- 훈련 데이터의 양을 늘려라

- 특성(Feature)의 개수를 줄여라

- 일반화(Regularization) 하여라

Dropout은 학습을 진행할 때 각 층(Layer)의 노드(=뉴런) 중 일부를 무작위로 선택하여 비활성화하는 방법임.

즉, 일부 노드들을 쉬게 함으로써 훈련 데이터에 지나치게 맞추어지는 과적합(Overfitting) 문제를 예방할 수 있음.

Dropout을 사용하면 여러 개의 모델을 합친 "네트워크 앙상블(Network Ensemble)"의 효과를 낼 수 있음.

---

인간처럼 기억을 까먹을 수 있게 한 것이 Dropout

Dropout이란 선택적으로 노드를 Drop하는 것.

Training Data에서는 학습이 조금 덜 될 수도 있지만 일반화 능력을 키워 Test Data에 대한 예측률을 높이는 방법.
