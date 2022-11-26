import{o as a,a as n,z as t}from"./vue-libs.d5ee895a.js";const p={class:"van-doc-markdown-body"},l=t(`<h1>Swipe \u8F6E\u64AD</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u4E00\u7EC4\u56FE\u7247\u6216\u5185\u5BB9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span>, <span class="hljs-title class_">SwipeItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swipe</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u6BCF\u4E2A SwipeItem \u4EE3\u8868\u4E00\u5F20\u8F6E\u64AD\u5361\u7247\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>autoplay</code> \u5C5E\u6027\u8BBE\u7F6E\u81EA\u52A8\u8F6E\u64AD\u7684\u95F4\u9694\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">indicator-color</span>=<span class="hljs-string">&quot;white&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.my-swipe</span> <span class="hljs-selector-class">.van-swipe-item</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="lan-jia-zai" tabindex="-1">\u61D2\u52A0\u8F7D</h3><p>\u5F53 Swipe \u4E2D\u542B\u6709\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>lazy-render</code> \u5C5E\u6027\u6765\u5F00\u542F\u61D2\u52A0\u8F7D\u6A21\u5F0F\u3002\u5728\u61D2\u52A0\u8F7D\u6A21\u5F0F\u4E0B\uFF0C\u53EA\u4F1A\u6E32\u67D3\u5F53\u524D\u9875\u548C\u4E0B\u4E00\u9875\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">lazy-render</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;image in images&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
    ];
    <span class="hljs-keyword">return</span> { images };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-change-shi-jian" tabindex="-1">\u76D1\u542C change \u4E8B\u4EF6</h3><p>\u5728\u6BCF\u4E00\u9875\u8F6E\u64AD\u7ED3\u675F\u540E\uFF0C\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u5F53\u524D Swipe \u7D22\u5F15\uFF1A&#39;</span> + index);
    <span class="hljs-keyword">return</span> { onChange };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zong-xiang-gun-dong" tabindex="-1">\u7EB5\u5411\u6EDA\u52A8</h3><p>\u8BBE\u7F6E <code>vertical</code> \u5C5E\u6027\u540E\u6ED1\u5757\u4F1A\u7EB5\u5411\u6392\u5217\uFF0C\u6B64\u65F6\u9700\u8981\u6307\u5B9A\u6ED1\u5757\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px;&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hua-kuai-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F</h3><p>\u6ED1\u5757\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A <code>100%</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>width</code> \u5C5E\u6027\u8BBE\u7F6E\u5355\u4E2A\u6ED1\u5757\u7684\u5BBD\u5EA6\u3002\u7EB5\u5411\u6EDA\u52A8\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>height</code> \u5C5E\u6027\u8BBE\u7F6E\u5355\u4E2A\u6ED1\u5757\u7684\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><blockquote><p>\u76EE\u524D\u4E0D\u652F\u6301\u5728\u5FAA\u73AF\u6EDA\u52A8\u6A21\u5F0F\u4E0B\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F\uFF0C\u56E0\u6B64\u9700\u8981\u5C06 loop \u8BBE\u7F6E\u4E3A false\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="zi-ding-yi-zhi-shi-qi" tabindex="-1">\u81EA\u5B9A\u4E49\u6307\u793A\u5668</h3><p>\u901A\u8FC7 <code>indicator</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u7684\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ active, total }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>{{ active + 1 }}/{{ total }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-indicator</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="swipe-props" tabindex="-1">Swipe Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoplay</td><td>\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A ms</td><td><em>number | string</em></td><td>-</td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A ms</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>initial-swipe</td><td>\u521D\u59CB\u4F4D\u7F6E\u7D22\u5F15\u503C</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>width</td><td>\u6ED1\u5757\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>height</td><td>\u6ED1\u5757\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>loop</td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>\u662F\u5426\u663E\u793A\u6307\u793A\u5668</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>vertical</td><td>\u662F\u5426\u4E3A\u7EB5\u5411\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>touchable</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u624B\u52BF\u6ED1\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>stop-propagation</td><td>\u662F\u5426\u963B\u6B62\u6ED1\u52A8\u4E8B\u4EF6\u5192\u6CE1</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\u672A\u5C55\u793A\u7684\u8F6E\u64AD</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>indicator-color</td><td>\u6307\u793A\u5668\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-events" tabindex="-1">Swipe Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6BCF\u4E00\u9875\u8F6E\u64AD\u7ED3\u675F\u540E\u89E6\u53D1</td><td>index, \u5F53\u524D\u9875\u7684\u7D22\u5F15</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipeitem-events" tabindex="-1">SwipeItem Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-fang-fa" tabindex="-1">Swipe \u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Swipe \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>prev</td><td>\u5207\u6362\u5230\u4E0A\u4E00\u8F6E\u64AD</td><td>-</td><td>-</td></tr><tr><td>next</td><td>\u5207\u6362\u5230\u4E0B\u4E00\u8F6E\u64AD</td><td>-</td><td>-</td></tr><tr><td>swipeTo</td><td>\u5207\u6362\u5230\u6307\u5B9A\u4F4D\u7F6E</td><td><em>index: number, options: SwipeToOptions</em></td><td>-</td></tr><tr><td>resize</td><td>\u5916\u5C42\u5143\u7D20\u5927\u5C0F\u6216\u7EC4\u4EF6\u663E\u793A\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u89E6\u53D1\u91CD\u7ED8</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeProps</span>, <span class="hljs-title class_">SwipeInstance</span>, <span class="hljs-title class_">SwipeToOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeRef = ref&lt;<span class="hljs-title class_">SwipeInstance</span>&gt;();

swipeRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">next</span>();
</code></pre></div><div class="van-doc-card"><h3 id="swipetooptions-ge-shi" tabindex="-1">SwipeToOptions \u683C\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>immediate</td><td>\u662F\u5426\u8DF3\u8FC7\u52A8\u753B</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-slots" tabindex="-1">Swipe Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u8F6E\u64AD\u5185\u5BB9</td><td>-</td></tr><tr><td>indicator <code>v3.4.0</code></td><td>\u81EA\u5B9A\u4E49\u6307\u793A\u5668</td><td><em>{ active: number, total: number }</em></td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-swipe-indicator-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-margin</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-opacity</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-background</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="hua-dong-lun-bo-shi-wei-shi-me-chu-fa-liao-click-shi-jian" tabindex="-1">\u6ED1\u52A8\u8F6E\u64AD\u65F6\u4E3A\u4EC0\u4E48\u89E6\u53D1\u4E86 click \u4E8B\u4EF6\uFF1F</h3><p>\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u662F\u7531\u4E8E\u9879\u76EE\u4E2D\u5F15\u5165\u4E86 <code>fastclick</code> \u5E93\u5BFC\u81F4\u7684\u3002<code>fastclick</code> \u7684\u539F\u7406\u662F\u901A\u8FC7 Touch \u4E8B\u4EF6\u6A21\u62DF\u51FA click \u4E8B\u4EF6\uFF0C\u800C Swipe \u5185\u90E8\u9ED8\u8BA4\u4F1A\u963B\u6B62 touchmove \u4E8B\u4EF6\u5192\u6CE1\uFF0C\u5E72\u6270\u4E86 fastclick \u7684\u5224\u65AD\uFF0C\u5BFC\u81F4\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u5C06 Swipe \u7EC4\u4EF6\u7684 stop-propagation \u5C5E\u6027\u8BBE\u7F6E\u4E3A false \u5373\u53EF\u907F\u514D\u8BE5\u95EE\u9898\u3002</p></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div><div class="van-doc-card"><h3 id="swipe-zu-jian-gong-neng-tai-shao-wu-fa-shi-xian-fu-za-xiao-guo" tabindex="-1">Swipe \u7EC4\u4EF6\u529F\u80FD\u592A\u5C11\uFF0C\u65E0\u6CD5\u5B9E\u73B0\u590D\u6742\u6548\u679C\uFF1F</h3><p>Vant \u4E2D\u7684 Swipe \u7EC4\u4EF6\u662F\u6BD4\u8F83\u8F7B\u91CF\u7684\uFF0C\u56E0\u6B64\u529F\u80FD\u4E5F\u6BD4\u8F83\u57FA\u7840\u3002\u5982\u679C\u9700\u8981\u66F4\u590D\u6742\u7684\u8F6E\u64AD\u6548\u679C\uFF0C\u63A8\u8350\u4F7F\u7528\u793E\u533A\u91CC\u4E00\u4E9B\u4F18\u8D28\u7684\u8F6E\u64AD\u5E93\uFF0C\u6BD4\u5982 <a href="https://github.com/surmon-china/vue-awesome-swiper" target="_blank">vue-awesome-swiper</a>\u3002</p></div><div class="van-doc-card"><h3 id="zu-jian-cong-yin-cang-zhuang-tai-qie-huan-dao-xian-shi-zhuang-tai-shi-wu-fa-zheng-que-xuan-ran" tabindex="-1">\u7EC4\u4EF6\u4ECE\u9690\u85CF\u72B6\u6001\u5207\u6362\u5230\u663E\u793A\u72B6\u6001\u65F6\uFF0C\u65E0\u6CD5\u6B63\u786E\u6E32\u67D3\uFF1F</h3><p>Swipe \u7EC4\u4EF6\u5728\u6302\u8F7D\u65F6\uFF0C\u4F1A\u83B7\u53D6\u81EA\u8EAB\u7684\u5BBD\u5EA6\uFF0C\u5E76\u8BA1\u7B97\u51FA\u8F6E\u64AD\u56FE\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u7EC4\u4EF6\u4E00\u5F00\u59CB\u5904\u4E8E\u9690\u85CF\u72B6\u6001\uFF0C\u5219\u83B7\u53D6\u5230\u7684\u5BBD\u5EA6\u6C38\u8FDC\u4E3A 0\uFF0C\u56E0\u6B64\u65E0\u6CD5\u6B63\u786E\u8BA1\u7B97\u4F4D\u7F6E\u3002</p><h4 id="jie-jue-fang-fa" tabindex="-1">\u89E3\u51B3\u65B9\u6CD5</h4><p>\u65B9\u6CD5\u4E00\uFF0C\u5982\u679C\u662F\u4F7F\u7528 <code>v-show</code> \u6765\u63A7\u5236\u7EC4\u4EF6\u5C55\u793A\u7684\uFF0C\u5219\u66FF\u6362\u4E3A <code>v-if</code> \u5373\u53EF\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
</code></pre><p>\u65B9\u6CD5\u4E8C\uFF0C\u8C03\u7528\u7EC4\u4EF6\u7684 resize \u65B9\u6CD5\u6765\u4E3B\u52A8\u89E6\u53D1\u91CD\u7ED8\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;swipe&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">swipe</span>.<span class="hljs-title function_">resize</span>();
</code></pre></div>`,25),e=[l],r={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(i,h)=>(a(),n("div",p,e))}};export{r as default};
