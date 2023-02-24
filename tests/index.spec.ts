import 'mocha';
import { assert, expect } from 'chai';
import sinon from "sinon";
import axios from 'axios';
import { AI21 } from '../src';

function generateChar(length:number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


describe('AI21', () => {
  describe('Summarize', () => {
    let ai21:any;
    let axiosPostStub:any;

    beforeEach(() => {
      ai21 = new AI21('test_token');
      axiosPostStub = sinon.stub(axios, 'post');
    });

    afterEach(() => {
      axiosPostStub.restore();
    });

    it('should return a failed response if token is not initialized', async () => {
      ai21 = new AI21();
      const errorMessage = 'Token Not Initialized';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if data is not specified', async () => {
      const errorMessage = 'Data Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize();

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if type is not specified in the data', async () => {
      const errorMessage = 'Type Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if type is review and restaurant and review is not specified in the data', async () => {
      const errorMessage = 'Restaurant and Review must be specified if Summarize type is reviews';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'reviews' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a successful response if the request is successful', async () => {
      const responseData = { summaries : [{text : "Summarized Text goes here"}] };
      axiosPostStub.resolves({ data: responseData });

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('success');
      expect(response.message).to.equal('Summaries Retrieved Successfully');
      expect(response.data).to.deep.equal(responseData);
    });

    it('should return a failed response if the request fails', async () => {
      const errorMessage = 'Failed to retrieve summaries';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });
  });


  describe('Rewrite', () => {
    let ai21:any;
    let axiosPostStub:any;

    beforeEach(() => {
      ai21 = new AI21('test_token');
      axiosPostStub = sinon.stub(axios, 'post');
    });

    afterEach(() => {
      axiosPostStub.restore();
    });

    it('should return a failed response if token is not initialized', async () => {
      ai21 = new AI21();
      const errorMessage = 'Token Not Initialized';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.rewrite({ text: 'text', intent: 'Your intent' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if data is not specified', async () => {
      const errorMessage = 'Data Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.rewrite();

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });


    it('should return a failed response if text is not specified in the data', async () => {
      const errorMessage = 'Text Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.rewrite({ intent: 'general' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if text is more than 500 characters', async () => {
      const errorMessage = 'Text cannot be more than 500 characters';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.rewrite({ text: generateChar(600), intent: 'general' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a successful response if the request is successful', async () => {
      const responseData = { suggestions : [{text : "AI21 Studio now allows you to rewrite text."}] };
      axiosPostStub.resolves({ data: responseData });

      const response = await ai21.rewrite({
        "text": "You can now use AI21 Studio to rewrite text.",
        "intent": "general"
      })

      expect(response.status).to.equal('success');
      expect(response.message).to.equal('Rewrite Retrieved Successfully');
      expect(response.data).to.deep.equal(responseData);
    });

    it('should return a failed response if the request fails', async () => {
      const errorMessage = 'Failed to retrieve rewrite';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.rewrite({
          "text": "You can now use AI21 Studio to rewrite text.",
          "intent": "general"
      });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });
  });

  describe('Paraphrase', () => {
    let ai21:any;
    let axiosPostStub:any;

    beforeEach(() => {
      ai21 = new AI21('test_token');
      axiosPostStub = sinon.stub(axios, 'post');
    });

    afterEach(() => {
      axiosPostStub.restore();
    });

    it('should return a failed response if token is not initialized', async () => {
      ai21 = new AI21();
      const errorMessage = 'Token Not Initialized';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.paraphrase({ text: 'text', style: 'Your style' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if data is not specified', async () => {
      const errorMessage = 'Data Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.paraphrase();

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });


    it('should return a failed response if text is not specified in the data', async () => {
      const errorMessage = 'Text Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.paraphrase({ style: 'general' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a failed response if text is more than 500 characters', async () => {
      const errorMessage = 'Text cannot be more than 500 characters';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.paraphrase({ text: generateChar(600), style: 'general' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });

    it('should return a successful response if the request is successful', async () => {
      const responseData = { suggestions : [{text : "AI21 Studio now allows you to rewrite text."}] };
      axiosPostStub.resolves({ data: responseData });

      const response = await ai21.paraphrase({
        "text": "You can now use AI21 Studio to rewrite text.",
        "style": "general"
      })

      expect(response.status).to.equal('success');
      expect(response.message).to.equal('Paraphrase Retrieved Successfully');
      expect(response.data).to.deep.equal(responseData);
    });

    it('should return a failed response if the request fails', async () => {
      const errorMessage = 'Failed to retrieve rewrite';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.paraphrase({
          "text": "You can now use AI21 Studio to rewrite text.",
          "style": "general"
      });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.null;
    });
  });
});
