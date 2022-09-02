### Internal Covariate Shift

- 학습하는 도중에 이전 layer의 파라미터 변화로 인해 현재 layer의 입력의 분포가 바뀌는 현상을 "Covariate Shift"라고 함.

### Covariate Shift를 줄이는 방법

- Internal Covariate Shift를 줄이는 대표적인 방법 중 하나는 각 layer로 들어가는 입력을 whitening시키는 것. 여기서 whitening을 시킨다는 의미는 입력을 평균 0, 분산 1로 바꿔준다는 것.

- 하지만 단순하게 whitening만을 시킨다면, whitening 과정과 parameter를 계산하기 위한 최적화 과정과 무관하게 진행이 되기 때문에 특정 파라미터가 계속 커지는 상태로 whitening이 진행이 될 수 있음.

- 그러므로 단순하게 whitening을 통해 평균과 분산을 조정하는 것보다는 좀 더 확실한 방법이 필요하며, 그것이 바로 BN(batch normalization)임.

- BN은 평균과 분산을 조정하는 과정이 별도의 process로 있는 것이 아니라, 신경망 안에 포함이 되어 training시에 평균과 분산을 조정하는 과정 역시 같이 조절이 된다는 점이 단순 whitening과 구별되는 차이점.

### Batch Normalization(BN)

BN이 whitening과 다른 부분은 평균과 분산을 구한 후 정규화 시키고 다시 scale과 shift 연산을 위해 감마와 베타가 추가되었으며, 감마와 베타의 추가됨으로써 정규화 시켰던 부분을 원래대로 돌리는 identity mapping도 가능하고, 학습을 통해 감마와 베타를 정할 수 있기 때문에 단순하게 정규화만을 할 때 보다 훨씬 강력해진다.

---

딥러닝의 많은 방법들이 그렇듯, 복잡한 네트워크 속에서 미치는 영향들을 증명을 하기는 어려움. 하지만 결론적으로 어떤 방향이든 BN의 효과는 분명함.

- loss surface를 보다 쉽게 찾을 수 잇고

- 최적화를 쉽게 만들며

- higher learning rate를 사용할 수 있게 만들고

- 여러 작업에서 모델 성능을 향상시킴.

### BN의 문제점

다양한 normalization에서 데이터를 표준화시키는 가장 좋은 방법은 전체 데이터에 대해 평균과 분산을 사용하는 것. 하지만 각 계층에 대해 계속 연산을 한다면 너무 많은 자원을 사용함. 그렇기에 다른 효율적인 방법으로 우리가 구하고 싶은 (각 계층 전체)평균과 분산에 근사한 값을 찾아야 함.

BN에서는 mini-batch에서 평균과 분산을 사용함. 방법론적으로 보았을 때, 약간의 오차는 존재할 수 있으나 괜찮은 추정 방법임.

하지만 이 방법이 문제가 생기는 몇 상황이 있을 수 있음.

- Small batch size
  
  - 극단적인 상황을 가정하여 batch size가 1일 때는 분산이 0이므로 정규화를 할 수 없음. 이 외의 상황에서도 batch가 작다면 정규화의 값이 기존의 값과 매우 다른 양상을 가지며 훈련에 부정적인 영향을 미칠 가능성이 큼. 그렇기에 이 방법에서는 batch size에 하한이 존재

- RNN의 반복 연결
  
  - RNN에서는 각 단계마다 서로 다른 통계치를 가짐. 매 단계마다 레이어에 별도의 BN을 적용해야 함. 모델을 더 복잡하게 만들며, 계속 새롭게 형성된 통계치를 저장해야한다는 점. BN은 매우 비효율적인 방법처럼 보임.

- 대안책
  
  - Weight Normalization
  
  - Layer Normalization
  
  - Instance Normalization
  
  - Group Normalization
  
  - Batch Renormalization
  
  - Batch-Instance Normalization
  
  - Switchable Normalization
  
  - Spectral Normalization
