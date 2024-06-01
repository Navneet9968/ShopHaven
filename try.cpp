#include <bits/stdc++.h>
using namespace std;

priority_queue<int, vector<int>, greater<int>> minHeap;
priority_queue<int> maxHeap;

void MedianFinder() {
    return;
}

void addNum(int num) {
    if (maxHeap.empty() || maxHeap.top() > num) {
        maxHeap.push(num);
    } else {
        minHeap.push(num);
    }

    if (maxHeap.size() > minHeap.size() + 1) {
        int maxTop = maxHeap.top();
        minHeap.push(maxTop);
        maxHeap.pop();
    } else if (minHeap.size() > maxHeap.size()+1) {
        int minTop = minHeap.top();
        maxHeap.push(minTop);
        minHeap.pop();
    }
}

double findMedian() {
    if (maxHeap.size() == minHeap.size()) {
        if (!maxHeap.empty()) {
            double averageMiddle = (maxHeap.top() + minHeap.top()) / 2.0;
            return averageMiddle;
        } else {
            return 0;
        }
    } else {
        return maxHeap.size() > minHeap.size() ? maxHeap.top() : minHeap.top();
    }
}

int main() {
    int n;
    cin >> n;
    vector<string> operation(n);
    vector<int> nums(n, -1);

    for (int i = 0; i < n; ++i) {
        cin >> operation[i];
    }
    for (int i = 0; i < n; ++i) {
            cin >> nums[i];
    }
    
    

    for (int i = 0; i < n; ++i) {
        if (operation[i] == "MedianFinder") {
            MedianFinder();
            cout << "null ";
        } else if (operation[i] == "addNum") {
            addNum(nums[i]);
            cout << "null ";
        } else if (operation[i] == "findMedian") {
            cout << findMedian() << " ";
        }
    }

    return 0;
}