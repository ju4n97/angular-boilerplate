import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './accessibility.component.html',
})
export class AccessibilityComponent {
    private readonly _algorithms = new Map<string, string>([
        [
            'factorial',
            `   
            function factorial(n) {
                if (n === 0 || n === 1) {
                    return 1;
                } else {
                    return n * factorial(n - 1);
                }
            }
        
            const number = 5; // Change the value of number as desired
            const result = factorial(number);
            console.log("Factorial of", number, ":", result);   
            `,
        ],
        [
            'fibonacci',
            `   
            function fibonacci(n) {
                if (n <= 1) {
                return n;
                } else {
                return fibonacci(n - 1) + fibonacci(n - 2);
                }
            }
            
            const number = 10; // Change the value of number as desired
            const result = fibonacci(number);
            console.log("Fibonacci sequence at index", number, ":", result); 
            `,
        ],
        [
            'bubbleSort',
            `   
            function bubbleSort(array) {
                const length = array.length;
                
                for (let i = 0; i < length - 1; i++) {
                    for (let j = 0; j < length - 1 - i; j++) {
                        if (array[j] > array[j + 1]) {
                        // Swap elements
                        const temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                        }
                    }
                }
                
                return array;
            }
        
            const numbers = [5, 3, 8, 4, 2]; // Change the values as desired
            const sortedNumbers = bubbleSort(numbers);
            console.log("Sorted numbers:", sortedNumbers);
            `,
        ],
    ]);

    form = new FormGroup({
        algorithm: new FormControl('factorial'),
    });

    formChanges = toSignal(this.form.valueChanges.pipe(startWith(this.form.value)));

    selectedAlgorithm = computed(() => this._algorithms.get(this.formChanges()?.algorithm ?? 'factorial'));
}
