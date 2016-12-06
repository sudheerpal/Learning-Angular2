import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Idea } from '../../models/idea';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'idea-create',
    templateUrl: 'app/views/ideas/create.html'
})
export class IdeaCreateComponent {
    ideaForm: FormGroup   
    

    constructor(fb: FormBuilder, private httpService: HttpService) {
        this.ideaForm = fb.group({
            'projectName': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(250)])]
        });
    }

    submitForm(value: Idea): void {
        if(!value.projectName.trim() || !value.description.trim()) {
            return;
        }

        var url = 'ideas';

        this.httpService.post(url, value)
        .then(data => {            
            console.log(data);
        })
    }
}
