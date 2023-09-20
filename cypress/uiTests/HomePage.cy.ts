// import { MountConfig } from 'cypress/angular';
// import { AppComponent } from 'src/app/app.component';
// import { ButtonComponent } from 'src/app/components/button/button.component';

// describe('Button.cy.ts', () => {
//   const config: MountConfig<AppComponent> = {
//     declarations: [ButtonComponent],
//   };
//   it('playground', () => {
//     cy.mount(AppComponent, {
//       ...config,
//       componentProperties: {
//         title: 'angular-16 -v-k-',
//         title1: 'Vishnu',
//       },
//     });
//     cy.get('[data-cy="Vishnu"]').click();
//     cy.get('button').should('contain', 'Vishnu');
//   });

//   it('playground', () => {
//     cy.mount(AppComponent, {
//       ...config,
//       componentProperties: {
//         title: 'angular-16 -v-k-',
//         title1: 'test',
//       },
//     });
//     cy.get('button').should('contain', 'test');
//   });
// });

import { HttpClientModule } from '@angular/common/http';
import { MountConfig } from 'cypress/angular';
import { ArticlesMock } from 'cypress/mocks/articles.mock';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/core/layout/footer.component';
import { HeaderComponent } from 'src/app/core/layout/header.component';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { TagsService } from 'src/app/core/services/tags.service';
import { UserService } from 'src/app/core/services/user.service';
import { HomeComponent } from 'src/app/features/home/home.component';
import { ArticleListComponent } from 'src/app/shared/article-helpers/article-list.component';

describe('Button.cy.ts', () => {
  const config: MountConfig<AppComponent> = {
    declarations: [],
    providers:[UserService, TagsService, ArticlesService],
    imports: [HeaderComponent, HomeComponent, FooterComponent, ArticleListComponent, HttpClientModule ,AppRoutingModule],
  };
  it('playground', () => {
    cy.mount(AppComponent, config);
    cy.intercept('GET', '/articles?limit=10&offset=0', {
      statusCode: 200,
      body: {
          articles: ArticlesMock
      }
  })
    cy.get('[data-cy="footer"] div a').should('contain', 'conduit');
    cy.get('[data-cy="footer"] span.attribution').should('contain', '© 2023. An interactive learning project from Thinkster. Code licensed under MIT.');
  });
});
